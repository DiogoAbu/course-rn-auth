import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'

const Input = props => (
  <View style={styles.view}>
    <Text style={styles.text}>{props.label}</Text>
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      underlineColorAndroid='transparent'
      {...props}
      style={[ styles.input, props.style ]}
    />
  </View>
)

const styles = StyleSheet.create({
  view: {
    flex          : 1,
    height        : 48,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems    : 'stretch',
  },

  text: {
    flex             : 2,
    alignSelf        : 'center',
    fontSize         : 18,
    fontWeight       : '600',
    textAlign        : 'right',
    paddingHorizontal: 6,
  },
  
  input: {
    flex             : 5,
    fontSize         : 18,
    paddingHorizontal: 12,
    marginHorizontal : 6,
    borderWidth      : 1,
    borderRadius     : 2,
    borderColor      : '#ddd',
    shadowColor      : '#000',
    shadowOffset     : { width: 0, height: -2 },
    shadowOpacity    : 0.1,
    shadowRadius     : 2,
  },
})

export default Input