import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { url } from "../url.js";
import axios from "axios";
import Spinner from '../components/Spinner.jsx';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
import {toast} from 'react-hot-toast';
// import {message} from "antd"

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loading,setloading]=useState(false)
  const [loginsuccess,setloginsuccess]=useState(false)

  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'application/json', // Adjust the content type as needed
    // 'Authorization': 'Bearer yourAccessToken', // Include any authorization token if required
  };

  const obj = {
    email:email,
    password:password
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response
    try {
      setloading(true)
      response = await axios.post(`${url}/users/login`, obj, { headers });
      // console.log(response)
      setloading(false)
      // console.log('Response Data:', response.data);
      if(response.status==200)
      {
        toast.success(response.data.mesg)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("authlogin",true)
        navigate("/")
      }
      else
      {
        toast(response.data.mesg)
      }
      // toast.success("login successfull")
      // Handle the response data or perform other actions here
    } catch (error) {
      // console.error('Error:', error);
      setloading(false)
      toast.error("not able to login")
    }

  
  };

  return (
    <>
    {/* <ToastContainer theme="colored"/> */}
    {loading ? <Spinner></Spinner> : 
      <div className='login-page'>
        
        <h2 style={{textAlign:"center"}}>Login form</h2>
        <br />
        <form action="" onSubmit={handleSubmit}>
          <input type="email" name="email" value={email} placeholder='enter an email' style={{ width: "100%" }} onChange={(e) => setemail(e.target.value)} required />
          <br />
          <br />
          <input type="password" name="password" value={password} placeholder='enter a password' style={{ width: "100%" }} onChange={(e) => setpassword(e.target.value)} required/>
          <br />
          <br />
          <button style={{ width: "100%" ,backgroundColor:"purple",color:"white",padding:"1%",cursor:"pointer"}}>Submit</button>
          <br />
          <br />
          New User? Click here to <Link to='/register'>Register</Link>
        </form>
      </div>
    }
    </>
  );
};

export default Login;