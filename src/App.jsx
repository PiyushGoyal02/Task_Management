import './App.css'
import { useState } from 'react'
import heroImg from './assets/hero.png'
import viteLogo from './assets/vite.svg'
import reactLogo from './assets/react.svg'
import Signin from './Authentication/Signin'
import Signup from './Authentication/Signup'
import Homepage from './Components/Homepage'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import ProfileSection from "./Components/ProfileSection"
// import 'react-toastify/dist/ReactToastify.css'; // Mandatorily required for styles

function App() {

  return (
    <div>
      <ToastContainer/>
      <Routes>

        <ErrorBoundery>
          <Route path='/' element={<Signin/>}></Route>
        </ErrorBoundery>

        <ErrorBoundery>
          <Route path='/signupRoute' element={<Signup/>}></Route>
        </ErrorBoundery>

        <ErrorBoundery>
          <Route path='/homepage' element={<Homepage/>}></Route>
        </ErrorBoundery>

        <ErrorBoundery>
          <Route path='/profile' element={<ProfileSection/>}></Route>
        </ErrorBoundery>

      </Routes>
    </div>
  )
}
  

export default App
