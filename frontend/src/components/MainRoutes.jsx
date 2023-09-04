import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Summery from './Summery'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/summery" element={<Summery></Summery>}/>
    </Routes>
    </>
  )
}

export default MainRoutes