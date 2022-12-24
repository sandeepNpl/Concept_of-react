import React from 'react'
import { HeaderStyle } from './components/header'
import { BlueButton, RedButton } from './components/styles/Button.styled'
import Greet from './greet'
const App = () => {
  return (
    <div>
        <HeaderStyle>
         hello world
        </HeaderStyle>
        <RedButton>Register</RedButton>
        <BlueButton>Blue Button </BlueButton>
  
    </div>
    
  )
}
export default App
