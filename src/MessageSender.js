import React, {useState} from 'react'
import './styling_CSS/MessageSender.css'
import {Avatar} from '@material-ui/core'
import { Videocam,PhotoLibrary,InsertEmoticon } from '@material-ui/icons';
function MessageSender() {
    const [input ,setInput] = useState("");
    const [imageUrl , setImageUrl]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        //some DB STUFF

        //clear after submit
        setInput("");
        setImageUrl("");
    }

  return (
    <div className='messageSender'>
      <div className='messageSenderTop'>
        <Avatar />
        <form>
            <input value={input}
            onChange={(e)=> setInput(e.target.value)}
             className='messagerSenderInput' placeholder={`What's on your Mind?`} style ={{width:"300px"}} />
            <input 
            value={imageUrl}
            onChange={(e)=>setImageUrl(e.target.value)}
            placeholder='IMAGE_URL (optional)' />
            <button onClick={handleSubmit} type="submit">HiddenSubmit</button>
        </form>
      </div>
      <div className='messageSenderFoot'>
          <div className='messageSenderOption'>
            <Videocam style={{color:'red'}} />
            <h3>Live Video</h3>
            </div>
            <div className='messageSenderOption'>
            <PhotoLibrary style={{color:'green'}} />
            <h3>Photo/Video</h3>
            </div>
            <div className='messageSenderOption'>
            <InsertEmoticon style={{color:'orange'}}/>
            <h3>Feeling/Activity</h3>
            </div>
       
       </div>

    </div>
  )
}

export default MessageSender
