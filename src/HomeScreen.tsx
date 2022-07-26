import { Screen, ImageBackground } from '@fuchsia-for-all/primitives'
import React, { useState } from 'react'

export function HomeScreen () {


   return (
      <Screen>
         <ImageBackground style={{"backgroundColor":"#7ed321","backgroundImage":{"resizeMode":"contain","style":{"flex":1}}}} layout={{"display":"flex","position":"initial","flex":"1"}} />
      </Screen>
   )
}