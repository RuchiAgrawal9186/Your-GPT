import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { url } from "../url.js";
import axios from "axios";
import Spinner from '../components/Spinner.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import {message} from "antd"

const ScifiImage = () => {
  const [text,settext]=useState("")
  const[image,setimage] = useState("")

  const [loading,setloading]=useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      text
    };
    try {
      setloading(true)
      const res = await axios.post(`${url}/openai/scifiimage`, obj, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
      });
    //   console.log(res)
    //  console.log(res.data)
     
    //  toast.success(res.data.mesg)
    //  toast.success("data fetched")
    if(res.status==201)
     {
      toast.warn(res.data.msg)
     }
     else
     {
      toast.success("generated....")
      setimage(res.data)
     setloading(false)
     }
    } catch (error) {
      setloading(false)
    //   toast.error("not able to login")
    toast.error("please login first..then access...")
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

}, [text,image]);

  return (
    <>
    <ToastContainer theme="colored"/>
      <div className='summary-page'>
        <h2 style={{textAlign:"center"}}>Scifi-Image</h2>
        <br />
        <form action="" onSubmit={handleSubmit}>
          <textarea  id="myTextarea"
name="text" value={text} placeholder='enter an text' style={{ width: "100%", minHeight: "50px", resize: "none" }} onChange={(e) => settext(e.target.value)} />
          <br />
          <br />
          <button style={{ width: "100%" ,backgroundColor:"purple",color:"white",padding:"1%",cursor:"pointer"}}>Generate Image</button>
          <br />
          <br />
          Not this tool ? <Link to='/'> Go Back</Link>
        </form>
        <div className='summury-container'>
            {loading && <Spinner></Spinner>}
            <img src={image}  alt='scifi' style={{width:"100%",height:"100%"}}/>
            {/* {image} */}
        </div>
      </div>
    </>
  );
};

export default ScifiImage;