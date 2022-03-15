import React from 'react'
import Header from './Header';
// import Navbar from './Navbar/Navbar';
import './styling_CSS/style.css'
import Sidebar from './Sidebar'
import Feed from './Feed.js';
import  Widgets from './Widgets';
const App=() => {
  return (
    <div className='app'>
      <Header/>
      <div className='app__body'>
        <Sidebar/>
        <Feed />
        <Widgets/>
      </div>
    </div>
      
  );
}

export default App;
