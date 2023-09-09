import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {url} from "../url.js"
import axios from "axios"
// import {message} from "antd"
import Spinner from '../components/Spinner.jsx'
import {toast} from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [username,setusername] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword]=useState("")
    const [loading,setloading]=useState(false)

    const navigate = useNavigate()

    const headers = {
      'Content-Type': 'application/json', // Adjust the content type as needed
      // 'Authorization': 'Bearer yourAccessToken', // Include any authorization token if required
    };

    const handleSubmit = async(e) =>{
        e.preventDefault()

        let obj = {
            username,email,password
        }
        try {
          setloading(true)
          const response = await axios.post(`${url}/users/register`, obj, { headers });
          // console.log(response)
          // console.log('Response Data:', response.data);
          setloading(false)
          if(response.status==200)
          {
            toast.success(response.data.mesg)
            navigate("/login")
          }
          else
          {
            toast(response.data.mesg)
          }
          // Handle the response data or perform other actions here
        } catch (error) {
          // console.error('Error:', error);
          setloading(false)
          toast.error("not able to Register")
        }
        
        setusername("")
        setemail("")
        setpassword("")
    }
  return (
    <>
    {/* <ToastContainer /> */}
    {loading ? <Spinner/> : 
    <div className='register-page'>
        <h4 style={{textAlign:"center"}}>Register form</h4>
        <br />
     <form action="" onSubmit={handleSubmit}>
       
        <input type="text" name="name" value = {username} placeholder='enter a name' style={{width:"100%"}} onChange={(e)=>setusername(e.target.value)} required/>
        <br />
        <br />
        
        <input type="email" name="email" value = {email} placeholder='enter a email' style={{width:"100%"}}  onChange={(e)=>setemail(e.target.value)} required/>
        <br />
        <br />
        <input type="password" name="password" value = {password} placeholder='enter a password' style={{width:"100%"}}  onChange={(e)=>setpassword(e.target.value)} required/>
        <br />
        <br />
        <button style={{width:"100%",backgroundColor:"purple",color:"white",padding:"1%",cursor:"pointer"}}>Submit</button>
        <br />
        <br />
        Already register ? click here to <Link to='/login'>Login</Link>

     </form>
    </div>}
    </>
  )
}

export default Register