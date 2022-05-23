import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'
import { RegisterScreen } from './RegisterScreen'
type RootStackNavigator = {
   LoginScreen: undefined,
   HomeScreen: undefined,
   RegisterScreen: undefined,
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
         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
   )
}