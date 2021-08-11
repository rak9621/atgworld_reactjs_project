import React from 'react'

const img1 = "https://atghelp.files.wordpress.com/2017/02/logo-in.png"


const LogHeader = (prop) => {
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

<div className="txtimg">
 <img src={prop.userimg} alt="userimg" />
 <h5>{prop.username}</h5>
</div>
     

</div>


            
        </>
    )
}

export default LogHeader
