import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusInput from './components/FocusInput'
import UncontrolledInput from './components/UncontrolledInput'
import ChangeBackground from './components/ChangeBackground'

function App() {
  

  return (
    <>
       <FocusInput/>
       <UncontrolledInput/>
      <ChangeBackground/>       
    </>
  )
}

export default App
