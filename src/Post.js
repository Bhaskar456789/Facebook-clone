import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';
import React from 'react'
import './styling_CSS/Post.css';
function Post({profilePic ,image , username,timestamp , message}) {
  return (
    <div className='post'>
      <div className='postTop'>
        <Avatar src={profilePic} className="postAvatar" />
        <div className='postTopInfo'>
            <h3>{username}</h3>
            <p>{timestamp}</p>
        </div>
        </div>
        <div className='postBottom'>
            <p>{message}</p>
        </div>
        <div className='postImage'>
            <img src={image} alt="" />
        </div>
        <div className='postOptions'>
                <div className='postOption'>
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className='postOption'>
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className='postOption'>
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className='postOption'>
                    <AccountCircle/>
                    <ExpandMoreOutlined />
                </div>
        </div>
      </div>
      
    
  )
}

export default Post
