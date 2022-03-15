import React from 'react'
import './styling_CSS/Widgets.css'
function Widget() {
  return (
    <div className='widgets'>

  {/*iframe directly from facebook template from developers website */}
    <iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/smilesquad/&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340"
            height="100%" 
            style={{border:"none" , overflow:"hidden"}}
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="encrypted-media">
    </iframe>
    </div>
  )
}

export default Widget
