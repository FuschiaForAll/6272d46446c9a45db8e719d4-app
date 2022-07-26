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
         <Container style={{"height":150,"borderRadius":5,"backgroundColor":"#f8e71c","display":"flex","position":"initial","margin":{"left":10,"right":10,"top":10,"bottom":10},"padding":{"left":0}}} >
            <Text properties={{"text":"Lorem Ipsum"}} style={{"height":24,"width":160,"color":"#7ed321","display":"inline","position":"initial","font":{"size":{"blocks":[{"key":"303gm","text":"18","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[]}]},"style":{"blocks":[{"key":"b8lv3","text":"normal","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[]}]},"weight":"weight","textAlign":"auto","textTransform":"none","lineHeight":"1em"}}} />
            <TextInput text={{ value: UsernameTextInputtext, onChange: setUsernameTextInputtext}} properties={{"placeholder":"Enter...","text":"undefined"}} style={{"height":24,"width":160,"color":"#000","borderColor":"#000","borderStyle":"solid","borderWidth":1,"borderRadius":5}} />
            <Text properties={{"text":"Lorem Ipsum"}} style={{"height":24,"width":160,"color":"#000000","display":"inline","position":"initial"}} />
            <TextInput text={{ value: PasswordTextInputtext, onChange: setPasswordTextInputtext}} properties={{"placeholder":"Enter...","text":"undefined"}} style={{"height":24,"width":160,"color":"#000","borderColor":"#000","borderStyle":"solid","borderWidth":1,"borderRadius":5}} />
            <Button properties={{"title":"Lorem Ipsum"}} style={{"height":35,"width":175,"backgroundColor":"#417505","borderRadius":5,"display":"flex","position":"initial","placement":"initial"}} actions={{"onPress":"ButtononPress"}} >
               <Text properties={{"text":"Lorem Ipsum"}} style={{"height":24,"width":160,"color":"#ffffff","display":"inline","position":"initial"}} />
            </Button>
         </Container>
         <Button properties={{"title":"Lorem Ipsum"}} style={{"height":35,"width":175,"backgroundColor":"#000000","borderRadius":5,"display":"flex","position":"initial","placement":"initial","margin":{"left":50,"right":0,"top":10}}} />
      </Screen>
   )
}