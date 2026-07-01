import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signin from './Authentication/Signin'
import Signup from './Authentication/Signup'
import Homepage from './Components/Homepage'
import ProfileSection from "./Components/ProfileSection"

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signupRoute' element={<Signup/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/profileSection' element={<ProfileSection/>}></Route>
      </Routes>
    </div>
  )
}
  

export default App
