import React from 'react'
import './styling_CSS/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post';
function Feed() {
  return (
    <div className='feed'>
    {/*  Story Reel */}
    <StoryReel />
    {/*   Message Sender '*/}
    <MessageSender />
    <Post 
      profilePic={'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg'}
      message={'Hi There'}
      timestamp={'15/03/2022'}
      username={'Bhaskar'}
      image={'https://www.bing.com/th?id=OIP.qhJqev2BMWrXd687wUuIoQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2'}

    />
    <Post 
      profilePic={'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg'}
      message={'Love You Buddy'}
      timestamp={'15/03/2022'}
      username={'Aliyan'}
      image={'https://th.bing.com/th/id/OIP.pRWPJPG_3NMgW-gAYpyrtAHaEK?pid=ImgDet&rs=1'}

    />
    <Post 
      profilePic={'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg'}
      message={'All is Well'}
      timestamp={'15/03/2022'}
      username={'Balaji'}
      image={'https://th.bing.com/th/id/OIP.2q30VpV3TvB9fAclxJbROAHaEd?w=278&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'}

    />
    
    
   
    </div>
  )
}

export default Feed
