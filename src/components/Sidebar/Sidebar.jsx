import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { IoIosMenu } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import  { Context }  from '../../context/Context';

const Sidebar = () => {
    const[extended,setExtended] = useState(false);
    const{onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)
    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt)
    }
  return (
    <div className='sidebar'>
      <div className="top">
      <IoIosMenu className='icon' onClick={()=>setExtended(prev=>!prev)} />
      <div className="new-chat" onClick={()=>newChat()}>
      <HiOutlinePlus className='icon' />
      {extended ? <p>New Chat</p>:null}
      </div>
      {extended ? 
    
    <div className="recent">
    <p className="recent-title">Recent</p>
    {prevPrompts.map((item,index)=>{
return(
  <div onClick={()=>loadPrompt(item)} className="recent-entry">
  <AiOutlineMessage className='icon' />
  <p>{item.slice(0,18)}...</p>
  </div>
)
    })}
   
   
  </div>
  :null}
      </div>
<div className="bottom">
<div className="bottom-item recent-entry">
<IoIosHelpCircleOutline className='icon' />
  {extended? <p>Help</p>:null}
</div>
<div className="bottom-item recent-entry">
<FaClockRotateLeft className='icon'/>
  {extended? <p>Activity</p>:null} 
</div>
<div className="bottom-item recent-entry">
<MdOutlineSettings className='icon' />
  {extended? <p>Settings</p>:null}
</div>
</div>
    </div>
  )
}

export default Sidebar

