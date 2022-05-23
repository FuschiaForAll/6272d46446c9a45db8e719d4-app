import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'
type RootStackNavigator = {
   LoginScreen: undefined,
   HomeScreen: undefined,
}
const Stack = createStackNavigator<RootStackNavigator>();
export function RootNavigator() {
   return (
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: false,
      }}>
         <Stack.Screen name="LoginScreen" component={LoginScreen} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
   )
}