import React from 'react'


const PopCA = (props) => {
    return (props.trigger)?(
        <>

            <div className="popca">


            
        
       
        
         

            <button onClick={() => props.setTrigger(false)}  className="closebutton" ><i class="far fa-times-circle"></i></button> 
    
            <div className="acformU">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼

</div>
    
             <div className="acform">
             
                <div className="acformL">
                    <h5 >{props.formtype}</h5>
                       <div className="createform">
                               <form action="">

                                <input type="text" value="Name" />
                                <input type="email" value="Email" />
                                <input type="txt"  value="Password"/>
                                <input type="txt" value="Confirm Password"/>

                               </form>

                              
                       </div>
                        
                       <div className="createAcc">
                                   Create Account
                               </div>

                             <div className="signup">
                             <i class="fab fa-facebook"style={{color:"blue"}} ></i>Sign up with Facebook

                             </div>
                             <div className="googlelogin">

                             <i class="fab fa-google"></i>Sign up with Google
                             </div>



                </div>
                <div className="acformR">
            
                     Already have an account?<h7 style={{color:"green"}}>Sign In</h7>
                     <img src={"https://pngimg.com/uploads/palm_tree/palm_tree_PNG93322.png"} alt="tree" />
                
                </div>
                 
             </div>




            </div>

            
        </>
    ):"";
}

export default PopCA
