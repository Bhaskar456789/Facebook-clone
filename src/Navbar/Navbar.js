import React from 'react'
import { FaFacebookMessenger,FaFacebookF ,FaPlus } from "react-icons/fa";

 const Navbar=()=>{
     return(
         <div>
            <FaFacebookF className='icons'/>
            <FaFacebookMessenger className='icons'/>
            <FaPlus className='icons'/>
         </div>
     )
 }

 export default Navbar