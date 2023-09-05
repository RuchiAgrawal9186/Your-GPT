import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Summery from '../pages/Summery'
import Paragraph from '../pages/Paragraph'
import Chatbot from '../pages/Chatbot'


const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage></Homepage>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/register" element={<Register></Register>}/>
        <Route path="/summary" element={<Summery></Summery>}/>
        <Route path="/paragraph" element={<Paragraph></Paragraph>}/>
        <Route path="/chatbot" element={<Chatbot></Chatbot>}/>
    </Routes>
    </>
  )
}

export default MainRoutes