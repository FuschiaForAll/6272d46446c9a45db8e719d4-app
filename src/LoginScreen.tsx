import { Screen, Container, Text, TextInput, Button } from '@fuchsia-for-all/primitives'
import React, { useState } from 'react'
import { useLoginMutation } from './generated/graphql'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

export function LoginScreen () {
   const [UsernameTextInputtext, setUsernameTextInputtext] = useState<string>()
   const [PasswordTextInputtext, setPasswordTextInputtext] = useState<string>()
   const [login] = useLoginMutation()
   const navigate = useNavigation<any>()
async function ButtononPress() {
const success = await login({ variables: { username: ``, password: ``}});
if (success.data) {
await AsyncStorage.setItem('authToken', success.data.login);
navigate.navigate('HomeScreen', {
});
}
if (success.errors) {
Alert.alert("Failed to login");
}
}
   return (
      <Screen>
         <Container style={{"borderRadius":5,"backgroundColor":"#7ed321","display":"flex","position":"initial","padding":{"left":"10","right":"10","top":"10","bottom":"10"},"flexContainer":{},"margin":{"left":"20","right":"20","top":"20","bottom":"20"}}} >
            <Text properties={{"text":"Username"}} style={{"height":24,"width":160,"color":"#000000","display":"inline","position":"initial"}} />
            <TextInput text={{ value: UsernameTextInputtext, onChange: setUsernameTextInputtext}} properties={{"placeholder":"Enter...","text":"undefined"}} style={{"height":24,"color":"#000","borderColor":"#000","borderStyle":"solid","borderWidth":1,"borderRadius":5}} />
            <Text properties={{"text":"Password"}} style={{"height":24,"width":160,"color":"#000000","display":"inline","position":"initial"}} />
            <TextInput text={{ value: PasswordTextInputtext, onChange: setPasswordTextInputtext}} properties={{"placeholder":"Enter...","text":"undefined"}} style={{"height":24,"color":"#000","borderColor":"#000","borderStyle":"solid","borderWidth":1,"borderRadius":5}} />
            <Button properties={{"title":"Lorem Ipsum"}} style={{"height":35,"backgroundColor":"#8b572a","borderRadius":5,"display":"flex","position":"initial","placement":"initial","flexContainer":{}}} actions={{"onPress":"ButtononPress"}} >
               <Text properties={{"text":"Login"}} style={{"color":"#f8e71c","display":"inline","position":"initial","font":{"size":"12","style":"normal","weight":"weight","textAlign":"center","textTransform":"none","lineHeight":"1em"},"alignSelf":"center"}} />
            </Button>
         </Container>
         <Container style={{"borderRadius":5,"backgroundColor":"#7ed321","display":"flex","position":"initial","padding":{"left":"10","right":"10","top":"10","bottom":"10"},"flexContainer":{},"margin":{"left":"20","right":"20","top":"20","bottom":"20"}}} />
      </Screen>
   )
}