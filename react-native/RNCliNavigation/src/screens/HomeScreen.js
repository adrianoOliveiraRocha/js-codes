import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        HomeScreen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    
  },

  title: {
    textAlign: 'center', fontSize: 25
  }

})
