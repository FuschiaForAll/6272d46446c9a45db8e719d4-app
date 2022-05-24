import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from './LoginScreen'
type RootStackNavigator = {
   LoginScreen: undefined,
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
      </Stack.Navigator>
   )
}