import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { url } from "../url.js";
import axios from "axios";
import Spinner from '../components/Spinner.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import {message} from "antd"

const Paragraph = () => {
  const [text,settext]=useState("")
  const[para,setpara] = useState("")

  const [loading,setloading]=useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      text
    };
    try {
      setloading(true)
      const res = await axios.post(`${url}/openai/paragraph`, obj, {
      headers: {
        'content-type': 'application/json'
      }
      });
     console.log(res.data)
     setpara(res.data)
     setloading(false)
    //  toast.success(res.data.mesg)
    //  toast.success("data fetched")
    } catch (error) {
      setloading(false)
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

}, [text,para]);

  return (
    <>
    <ToastContainer />
      <div className='summary-page'>
        <h2 style={{textAlign:"center"}}>Generate Paragraph</h2>
        <br />
        <form action="" onSubmit={handleSubmit}>
          <textarea  id="myTextarea"
name="text" value={text} placeholder='enter a word...' style={{ width: "100%", minHeight: "50px", resize: "none" }} onChange={(e) => settext(e.target.value)} />
          <br />
          <br />
          <button style={{ width: "100%" ,backgroundColor:"black",color:"white",padding:"1%",cursor:"pointer"}}>Generate</button>
          <br />
          <br />
          Not this tool ? <Link to='/'> Go Back</Link>
        </form>
        <div className='summury-container'>
            {loading && <Spinner></Spinner>}
            {para}
        </div>
      </div>
    </>
  );
};

export default Paragraph;