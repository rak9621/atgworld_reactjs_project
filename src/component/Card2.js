import React from 'react'

const card2 = (props) => {
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

   <div className="aftercont1">
       
    <div className="datetime"><p>{props.datetime}</p></div>
    <div>
    <i class="fas fa-map-marker-alt">Delhi</i>
    </div>
   </div>

   <div className="tab">
       <p style= {{color:"green"}}>{props.tab}</p>
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

export default card2
