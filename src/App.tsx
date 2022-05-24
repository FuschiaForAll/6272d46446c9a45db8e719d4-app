import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from './RootNavigator'
import { ApolloProvider } from '@apollo/client'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { apolloClient } from './apollo-client'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ApolloProvider>  
  )
}

export default App
