import React from 'react'
import PopCA from './PopCA'
import { useState } from 'react'

const Toolbar = (props) => {

 const [buttonPopup,setButtonPopup] = useState(false)

    return (
        <>
          <div className="toolbar">
              
           <div className="toolbarcont">
            
            <ul>
                <li>All Post(32)</li>
                <li>Article</li>
                <li>Event</li>
                <li>Education</li>
                <li>Job</li>
            </ul>


           </div>
     
       <div className="public">
           
           <button className="selector" style={{backgroundColor:"#FFFFFF"}} >
           Write Post
           </button>
<button className="adduser" name="" style={{color:"#FFFFFF"}} onClick={() =>setButtonPopup(true)} >
               {props.adduser} {props.data}
           
       </button>
            
            <PopCA trigger={buttonPopup} setTrigger ={setButtonPopup}
            
            formtype="Create Account"

            
            />
        
        
           </div>        


         <hr style={{width:1000}}/>
              
              </div>  
        </>
    )
}

export default Toolbar
