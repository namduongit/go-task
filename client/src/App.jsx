import { useState } from 'react'
import './App.css'

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layout
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// Component

// Page
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="content-warp" style={{ minHeight: "100vh" }}>

          <Routes>

            {/* Router */}
            <Route path='/' element={<Main />} />
            <Route path='/auth/login' element={<Login />} />

          </Routes>

        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
