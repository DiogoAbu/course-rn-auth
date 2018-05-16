import React from 'react'
import { StyleSheet, View } from 'react-native'
import firebase from 'firebase'
import { Button, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends React.PureComponent {
  state = {
    loggedIn: null,
  }

  componentDidMount = () => {
    firebase.initializeApp({
      apiKey           : "AIzaSyBzv1ZqL2qDl7RC4RucumKEOE3IX_3Qvhs",
      authDomain       : "auth-5a3f2.firebaseapp.com",
      databaseURL      : "https://auth-5a3f2.firebaseio.com",
      projectId        : "auth-5a3f2",
      storageBucket    : "auth-5a3f2.appspot.com",
      messagingSenderId: "664603264843",
    })

    firebase.auth().onAuthStateChanged(user => this.setState({ loggedIn: !!user }))
  }

  _onPressLogout = () => {
    firebase.auth().signOut()
  }

  _renderContent = () => {
    switch(this.state.loggedIn) {
      case true: 
        return (
          <Button
            onPress={this._onPressLogout}
            text='Logout'
          />
        )
      case false: 
        return (
          <LoginForm />
        )
      default: 
        return (
          <Spinner />
        )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='Authentication' />
        
        {this._renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
