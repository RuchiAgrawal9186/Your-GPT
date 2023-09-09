import React from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import {Box,Typography} from "@mui/material"
import { url } from '../url'
import {toast} from 'react-hot-toast';

const Navbar = () => {

  const navigate = useNavigate()

  const auth = localStorage.getItem("authlogin")
  const handleLogout = () =>{
    fetch(`${url}/logout`,{
      method:"GET",
      headers:{
          "content-type":"application/json",
          authorization: `Bearer ${localStorage.getItem("token")}` 
      },
      // body:JSON.stringify()
    })
    .then((res)=> res.json())
    .then((res)=> {
      // console.log(res)
      toast.success(res.msg)
      localStorage.removeItem("authlogin")
      localStorage.removeItem("token")
      navigate("/login")
      // setdata(res)
    })
    .catch((err)=> console.log(err))

  }
  return (
    <>
    <Box width={"100%"} p="1rem 2%" textAlign={"center"} bgcolor={"purple"} color={"white"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
        <Typography variant='h3' color={"ehite"} fontWeight={"bold"} margin={"1%"}>
            Your - GPT
        </Typography>
        <Link to="/" style={{padding:"1%",color:"white"}}>Home</Link>
        {auth?<>
          <Link to="#" style={{padding:"1%",color:"white"}} onClick={handleLogout}>Logout</Link>
        </>:
        <>
        <Link to="/login" style={{padding:"1%",color:"white"}}>Login</Link>
        <Link to="/register" style={{padding:"1%",color:"white"}}>Register</Link>
        
        </>
        }
        
    </Box>
    </>
  )
}

export default Navbar