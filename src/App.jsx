import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signin from './Authentication/Signin'
import Signup from './Authentication/Signup'

function App() {
  // console.log('Piyush Goyal')
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signupNew' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}
  

export default App
