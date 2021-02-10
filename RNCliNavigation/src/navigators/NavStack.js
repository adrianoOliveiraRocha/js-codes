import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/HomeScreen'
import ProfileScreen from './../screens/ProfileScreen'

const Stack = createStackNavigator();

const NavStack = () => {
  return (
    <NavigationContainer>

      <Stack.Screen 
        name="Home Screen"
        component={HomeScreen}
        options={{title: "Home"}}
      />

      <Stack.Screen 
        name="Profile Screen"
        component={ProfileScreen}
        options={{title: "Profile"}}
      />

    </NavigationContainer>
  )
}

export default NavStack;