import React from 'react'



const Card = (props) => {
    return (
        <>
          
  <div className="card">

    <img src={props.img1} alt="cardimages" className="cradimg" />

    <span>
    {props.article}
    </span>

       <div className="content1">
           <p>{props.content1}</p>
       </div>
       <h1 className="dot3">...</h1>

       <div className="content2">
           <p>{props.content2}</p>
       </div>

       <div className="cardbottom">
            
               <div className="bottomimg"> <img src={props.img2} alt="user" /></div>
                <div className="username"><h5>{props.user}</h5></div>
                <div className="visit"><i class="far fa-eye"> {props.views}</i></div>
                <div className="share"><i class="fas fa-share-alt"></i></div>
        

       </div>

  </div>

        </>
    )
}

export default Card
