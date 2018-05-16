import React from 'react'
import { StyleSheet, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

export default class LoginForm extends React.PureComponent {
  state = {
    mail   : '',
    pass   : '',
    error  : '',
    loading: false,
  }

  _onPressLogin = async () => {
    this.setState({ error: '', loading: true })

    const { mail, pass } = this.state

    try {
      await firebase.auth().signInWithEmailAndPassword(mail, pass)
      return this._onLoginSuccess()

    } catch(e) {
      // Continue to create user
    }

    try{
      await firebase.auth().createUserWithEmailAndPassword(mail, pass)
      return this._onLoginSuccess()

    } catch(e) {
      return this._onLoginFail()
    }
  }

  _onLoginSuccess = () => this.setState({ mail: '', pass: '', error: '', loading: false })

  _onLoginFail = () => this.setState({ error: 'Authentication failed', loading: false })

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            keyboardType='email-address'
            label='Mail'
            onChangeText={mail => this.setState({ mail })}
            placeholder='mail@example.com'
            value={this.state.mail}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            onChangeText={pass => this.setState({ pass })}
            placeholder='password'
            secureTextEntry
            value={this.state.pass}
          />
        </CardSection>

        {this.state.error ? <Text style={styles.error}>{this.state.error}</Text> : null}

        <CardSection>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <Button
              onPress={this._onPressLogin}
              text={'Login'}
            />
          )}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    color     : 'red',
    fontSize  : 20,
    alignSelf : 'center',
    paddingTop: 6,
  },
})