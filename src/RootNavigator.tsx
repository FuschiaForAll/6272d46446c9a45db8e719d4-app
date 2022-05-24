import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Screen } from './Screen'
type RootStackNavigator = {
   Screen: undefined,
}
const Stack = createStackNavigator<RootStackNavigator>();
export function RootNavigator() {
   return (
      <Stack.Navigator initialRouteName="Screen" screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: false,
      }}>
         <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
   )
}