import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import FlightRoutesSection from './Pages/FlightRoutes'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/flight-routes' element={<FlightRoutesSection/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  ) 
}
