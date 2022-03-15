import React from 'react'
import './styling_CSS/StoryReel.css'
import Story from './Story'
function StoryReel() {
  return (
    <div className='storyReel'>
     {/*Stories Here*/}  
     <Story 
        image="https://www.trickscity.com/wp-content/uploads/2016/11/Tuscan-Leather-Tom-Ford-Smoking-boy-Tumbler.png" 
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u-b71527e605ae1b748fc2d4157a842e57e427ad445v=4"
        title="Bhaskar" 
     />
            
            <Story image="https://wallpapercave.com/wp/wp6511715.jpg"
            profileSrc="https://wallpaperaccess.com/full/696026.jpg" 
            title="Aliyaan" />
            
            <Story image="https://wallpaperaccess.com/full/696026.jpg" 
            profileSrc="https://wallpapercave.com/wp/wp6511715.jpg" 
            title="Omkar"/>
            
            <Story image='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'
                profileSrc="https://avante.biz/wp-content/uploads/Girls-Profile-Pic-Wallpapers/Girls-Profile-Pic-Wallpapers-024.jpg" 
                title="Yella"/>
            
            <Story image="https://wallpapercave.com/wp/wp3611722.jpg" 
            profileSrc="https://wallpapercave.com/wp/wp3611722.jpg" 
            title="Sandeep"/>
           


    </div>
  )
}

export default StoryReel
