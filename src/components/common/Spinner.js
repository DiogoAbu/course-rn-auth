import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Spinner = props => (
  <View style={styles.view}>
    <ActivityIndicator
      {...props}
      color={props.color || '#007aff'}
      size={props.size || 'large'}
      style={[ styles.spinner, props.style ]}
    />
  </View>
)

const styles = StyleSheet.create({
  view: {
    flex          : 1,
    justifyContent: 'center',
    alignItems    : 'center',
  },
  spinner: {
  },
})

export default Spinner