import React from 'react'
import './styling_CSS/Header.css'
import { Search, Home, Flag, SubscriptionsOutlined,StorefrontOutlined,SupervisedUserCircle , Forum, NotificationsActive, ExpandMore, Add } from '@material-ui/icons';
import {Avatar ,IconButton} from '@material-ui/core';


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://th.bing.com/th/id/OIP.3ZzuiBFQSpjv3BDNTGda8gHaHa?pid=ImgDet&rs=1' alt="NoPhoto" />
            
            <div className='header__input'>
                <Search />
                <input placeholder='Search Meta' type='text'/>
                </div>  
        </div>

        <div className='header__center'>
            
              <div className='header__options header__options--active'>
              <Home fontSize="large"  />
              </div>
              <div className='header__options'>
              <Flag fontSize="large"  />
              </div>
              <div className='header__options'>
              <SubscriptionsOutlined fontSize="large"  />
              </div>
              <div className='header__options'>
              <StorefrontOutlined fontSize="large"  />
              </div>
              <div className='header__options'>
               <SupervisedUserCircle fontSize="large"  />
              </div>

        </div>

        <div className='header__right' >
            
            <div className='header__info'>
                <Avatar/>
                <h4>Bhaskar Dasari</h4>
            </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
           
        </div> 

    </div>
  )
}

export default Header
