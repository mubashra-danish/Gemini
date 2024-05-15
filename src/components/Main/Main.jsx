import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Context';
import { FaRegCompass } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";

const Main = () => {
    const  {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" alt="" />
        </div>
      <div className="main-container">
        {!showResult?
      <>
      <div className="greet">
    <p><span>Hello, Mubashra.</span></p>
    <p>How can I help you today ?</p>
</div>
<div className="cards">
<div className="card">
<p>Suggest beautiful places to see on an upcoming road trip</p>
<FaRegCompass className='ico'/>

</div>
<div className="card">
<p>Briefly summarize this concept: Urban planning</p>
<FaRegLightbulb className='ico'/>


</div>
<div className="card">
<p>Brainstorm team bonding activities for our work retreat</p>
<FaRegMessage className='ico'/>

</div>
<div className="card">
<p>Improve the readability of the following code</p>
<IoCodeSlash className='ico'/>

</div>

</div>
      </>
  :<div className='result'>
<div className="result-title">

  <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" alt="" className='imgu'/>
  <p>{recentPrompt}</p>
</div>
<div className="result-data result-title">
<SiGooglegemini className={`gemnicon ${loading ? 'loading' : ''}`} />
          
{loading? (<div className='loader'>
  <hr />
  <hr />
  <hr />
  </div>
 ) : (<p dangerouslySetInnerHTML={{__html:resultData}}></p>
  )}
</div>
    </div>    
      }


<div className="main-bottom">

    <div className="search-box">
        <input type="text" placeholder='Enter a prompt here' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <div>
        <RiGalleryLine className='ic'/>
        <FaMicrophone className='ic' />
       {input ?  <IoMdSend className='ic' onClick={()=>onSent()}/>:null}
       
        </div>
    </div>
    <p className="bottom-info">
        Gemini may display inaccurate info,including about people,so double check its responses. 
    </p>
</div>
      </div>
    </div>
  )
}

export default Main
