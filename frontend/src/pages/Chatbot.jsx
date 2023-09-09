import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { url } from "../url.js";
import axios from "axios";
import Spinner from '../components/Spinner.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import {message} from "antd"

const Chatbot = () => {
  const [text,settext]=useState("")
  const[response,setresponse] = useState("")

  const [loading,setloading]=useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      text
    };
    try {
      setloading(true)
      const res = await axios.post(`${url}/openai/chatbot`, obj, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
      });
    //  console.log(res.data)
     if(res.status==201)
     {
      toast.warn(res.data.msg)
     }
     else
     {
      // toast.success("generated....")
      setresponse(res.data)
      setloading(false)
     }
    //  toast.success(res.data.mesg)
    //  toast.success("data fetched")
    } catch (error) {
      setloading(false)
      toast.error("please login first..then access...")
    //   toast.error("not able to login")
    }
  };

  useEffect(() => {
    // Update the textarea's height to fit the content when the component mounts or when the text changes
    const textarea = document.getElementById('myTextarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';


    const summaryContainer = document.querySelector('.summary-container');
        if (summaryContainer) {
            summaryContainer.style.minHeight = 'unset'; // Reset min-height
            const containerHeight = summaryContainer.clientHeight;
            const contentHeight = summaryContainer.scrollHeight;
            
            if (contentHeight > containerHeight) {
                summaryContainer.style.minHeight = contentHeight + 'px';
            }
        }

}, [text,response]);

  return (
    <>
    <ToastContainer theme="colored"/>
      <div className='summary-page'>
        <h2 style={{textAlign:"center"}}>Chat Bot</h2>
        <br />
        <form action="" onSubmit={handleSubmit}>
          <textarea  id="myTextarea"
name="text" value={text} placeholder='enter a word...' style={{ width: "100%", minHeight: "50px", resize: "none" }} onChange={(e) => settext(e.target.value)} />
          <br />
          <br />
          <button style={{ width: "100%" ,backgroundColor:"purple",color:"white",padding:"1%",cursor:"pointer"}}>Chat</button>
          <br />
          <br />
          Not this tool ? <Link to='/'> Go Back</Link>
        </form>
        <div className='summury-container'>
            {loading && <Spinner></Spinner>}
            {response}
        </div>
      </div>
    </>
  );
};

export default Chatbot;