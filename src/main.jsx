import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import LandingPage from './landing'
import RegisterPage from './register'
import LoginPage from './login'
import ProfilePage from './Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<LandingPage/>} />
        <Route path = "/register" element={<RegisterPage/>}/>
        <Route path = '/login' element={<LoginPage/>} />
        <Route path = "/profile" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
