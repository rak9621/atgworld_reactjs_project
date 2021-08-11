import React from 'react'
import Asidebelow from './Asidebelow'

const AsideCont = () => {
    return (
        <>
        <div className="asidecontainer">

        <i class="far fa-hand-point-right">RECOMMENDED GROUP</i>
        <hr />       
           <Asidebelow 
          asidebelowimg ="https://picsum.photos/40/40"
          asidebelowname ="Atul Ranjan"
           />
        <Asidebelow 
          asidebelowimg ="https://picsum.photos/40/40"
          asidebelowname ="Atul Ranjan"
           />
<Asidebelow 
          asidebelowimg ="https://picsum.photos/40/40"
          asidebelowname ="Atul Ranjan"
           />
           <Asidebelow 
          asidebelowimg ="https://picsum.photos/40/40"
          asidebelowname ="Atul Ranjan"
           />
          

        </div>

        </>
    )
}

export default AsideCont

