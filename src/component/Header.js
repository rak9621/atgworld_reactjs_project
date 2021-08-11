import React from 'react'
import './style.css'
const img1 = "https://atghelp.files.wordpress.com/2017/02/logo-in.png"

const Header = () => {
  return (
    <>
    
    <div className="nav">

    <div className="log">
      <img src={img1} alt="atglogo" className="logoimg"/>
    </div>

    <div className="searchbar">
    <i class="fas fa-search"></i>
    Search for your favourite group in ATG 
    </div>
   
   <div className="txt">
     <h7>Create Account ..</h7>
   </div>
         

    </div>

    
      
    </>
  )
}

export default Header
