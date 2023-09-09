import React from 'react'
import { MdDescription } from 'react-icons/md'
import { ImParagraphLeft } from 'react-icons/im'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { FaFileCode } from 'react-icons/fa'
import {PiImageFill } from "react-icons/pi"
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='cardContainer'>

      <div>
      <p style={{fontWeight:"bolder"}}>Text Generation</p>
      <div className='card' onClick={()=> navigate("/summary")}>
      <MdDescription size="40%" color="purple" />
      <h5>Text Summary</h5>
      <p>Summarize long text into short sentences</p> 
      </div>
      </div>

      <div>
      <p style={{fontWeight:"bolder"}}>Paragraph Generation</p>
      <div className='card' onClick={()=> navigate("/paragraph")}>
      <ImParagraphLeft size="35%" color="purple" />
      <h5>Paragraph</h5>
      <p>Generate paragraph with words</p> 
      </div>
      </div>

      <div>
      <p style={{fontWeight:"bolder"}}>AI ChatBot</p>
      <div className='card' onClick={()=> navigate("/chatbot")}>
      <BsFillChatDotsFill size="40%" color="purple" />
      <h5>ChatBot</h5>
      <p>Chat with AI Chatbot...</p> 
      </div>
      </div>

      <div>
      <p style={{fontWeight:"bolder"}}>Javascript Converter</p>
      <div className='card' onClick={()=> navigate("/converter")}>
      <FaFileCode size="33%" color="purple" />
      <h5>JS Converter</h5>
      <p>Transalte english to javascript code</p> 
      </div>
      </div>

      <div>
      <p style={{fontWeight:"bolder"}}>AI SCIFI-Images</p>
      <div className='card' onClick={()=> {
       navigate("/scifiimage")
      }}>
      <PiImageFill size="40%" color="purple"/>
      <h5>Scifi Image</h5>
      <p>Generate Scifi images..</p> 
      </div>
      </div>

      
    </div>
    </>
  )
}

export default Homepage