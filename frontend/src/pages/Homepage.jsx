import React from 'react'
import { MdDescription } from 'react-icons/md'
import { ImParagraphLeft } from 'react-icons/im'
import { BsFillChatDotsFill } from 'react-icons/bs'
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
      <h5>TEXT SAUMMARY</h5>
      <p>Summarize long text into short sentences</p> 
      </div>
      </div>

      <div>
      <p style={{fontWeight:"bolder"}}>Paragraph Generation</p>
      <div className='card' onClick={()=> navigate("/paragraph")}>
      <ImParagraphLeft size="40%" color="purple" />
      <h5>PARAGRAPH</h5>
      <p>Generate paragraph with words</p> 
      </div>
      </div>

      <div>
      <p style={{fontWeight:"bolder"}}>Text Generation</p>
      <div className='card' onClick={()=> navigate("/chatbot")}>
      <BsFillChatDotsFill size="40%" color="purple" />
      <h5>TEXT SAUMMARY</h5>
      <p>Summarize long text into short sentences</p> 
      </div>
      </div>

      <div>
      <p>Text Generation</p>
      <div className='card'>
      <MdDescription size="40%" color="purple" />
      <h5>TEXT SAUMMARY</h5>
      <p>Summarize long text into short sentences</p> 
      </div>
      </div>

      <div>
      <p>Text Generation</p>
      <div className='card'>
      <MdDescription size="40%" color="purple" />
      <h5>TEXT SAUMMARY</h5>
      <p>Summarize long text into short sentences</p> 
      </div>
      </div>

      
    </div>
    </>
  )
}

export default Homepage