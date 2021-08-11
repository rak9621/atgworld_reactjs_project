import React from 'react'

import LogHeader from '../component/LogHeader'
import Body from '../component/Body'
import Card from '../component/Card'
import Toolbar from '../component/Toolbar'
import Aside from '../component/Aside'
import Card2 from '../component/Card2'

import AsideCont from '../component/AsideCont'

const Logeduser = () => {
    return (
        <>
        <LogHeader
        
        userimg ="https://picsum.photos/id/1025/60/60"
        username="Rakesh Baghel"
        />

        <Body/>
        
<Toolbar

 adduser={ <i class="fas fa-sign-out-alt" style={{backgroundColor:"#2F6CE5"}}> </i>}
 data ="Leave group"



/>


        <Aside/>
        <AsideCont/>
        
        


        <Card 
  
  img1="https://picsum.photos/692/220"
  article="✍️ Article"
  content1="What if famous brands had regular fonts? Meet RegulaBrands!"
  content2="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
  img2="https://picsum.photos/40/40"
  user="rakesh"
  views="1.4k views"
  
  /> 

<Card 
  
  img1="https://picsum.photos/692/220"
  article="✍️ Article"
  content1="What if famous brands had regular fonts? Meet RegulaBrands!"
  content2="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
  img2="https://picsum.photos/40/40"
  user="rakesh"
  views="1.4k views"
  
  /> 
      <Card2
  
  img1="https://picsum.photos/692/220"
  article="🔬️ Education"
  content1="Tax Benefits for Investment under National "
  datetime= {<i class="fas fa-calendar-week">Fri, 12 Oct, 2018</i>}
  img2="https://picsum.photos/40/40"
  tab="Apply On Tamplate"
  user="rakesh"
  views="1.4k views"

  />

            
        </>
    )
}

export default Logeduser
