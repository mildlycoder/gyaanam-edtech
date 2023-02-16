import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Survey } from './pages'
import { Navbar, Footer } from './components/layout components'
import { Register, Login } from './pages/auth'

const App = () => {
  return (
    <div className='font-manrope'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/survey' element={<Survey/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App