import React from 'react'
import './styling_CSS/Sidebar.css'
import SidebarRow from './SidebarRow'
import { LocalHospital,ExpandMoreOutlined,EmojiFlags,People,Chat,Storefront,VideoLibrary } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'



function Sidebar() {
  return (
    <div className='sidebar'>
    <SidebarRow src={Avatar} title={'Bhaskar'}/>
    <SidebarRow  Icon={LocalHospital}
    title="Covid19 Information Center"/>
      <SidebarRow Icon={EmojiFlags} title='Pages'/>
      <SidebarRow Icon={People} title='Friends' />
      <SidebarRow Icon={Chat} title="Messenger"/>
      <SidebarRow Icon={Storefront} title="MarketPlace"/>
      <SidebarRow Icon={VideoLibrary} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
    </div>
  )
}

export default Sidebar
