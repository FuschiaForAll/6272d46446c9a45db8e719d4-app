import { Screen, Container, Text, TextInput, Button } from '@fuchsia-for-all/primitives'
import React, { useState } from 'react'

export function LoginScreen () {
   const [UsernameTextInputtext, setUsernameTextInputtext] = useState<string>()
   const [PasswordTextInputtext, setPasswordTextInputtext] = useState<string>()

   return (
      <Screen>
         <Container style={{"height":150,"borderRadius":5,"backgroundColor":"#f8e71c","display":"flex","position":"initial","margin":{"left":10,"right":10,"top":10,"bottom":10},"padding":{"left":0}}} >
            <Text properties={{"text":"Lorem Ipsum"}} style={{"height":24,"width":160,"color":"#000000","display":"inline","position":"initial"}} />
            <TextInput text={{ value: UsernameTextInputtext, onChange: setUsernameTextInputtext}} properties={{"placeholder":"Enter...","text":"undefined"}} style={{"height":24,"width":160,"color":"#000","borderColor":"#000","borderStyle":"solid","borderWidth":1,"borderRadius":5}} />
            <Text properties={{"text":"Lorem Ipsum"}} style={{"height":24,"width":160,"color":"#000000","display":"inline","position":"initial"}} />
            <TextInput text={{ value: PasswordTextInputtext, onChange: setPasswordTextInputtext}} properties={{"placeholder":"Enter...","text":"undefined"}} style={{"height":24,"width":160,"color":"#000","borderColor":"#000","borderStyle":"solid","borderWidth":1,"borderRadius":5}} />
            <Button properties={{"title":"Lorem Ipsum"}} style={{"height":35,"width":175,"backgroundColor":"#417505","borderRadius":5,"display":"flex","position":"initial","placement":"initial"}} >
               <Text properties={{"text":"Lorem Ipsum"}} style={{"height":24,"width":160,"color":"#ffffff","display":"inline","position":"initial"}} />
            </Button>
         </Container>
      </Screen>
   )
}