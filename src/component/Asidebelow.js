import React from 'react'



const Asidebelow = (props) => {
    return (
        <>
     <div className="asidebelow">
           
   
       
          <div className="asideimg" ><img src={props.asidebelowimg} alt="img"  className="asideimg"/></div>
          <div><p>{props.asidebelowname}</p></div>
          <div className="asidebutton"> <button type="button" >fallow</button></div>

     

     </div>


        </>
    )
}

export default Asidebelow
