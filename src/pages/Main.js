import React from 'react'
import Header from '../component/Header'
import Body from '../component/Body'
import Card from '../component/Card'
import Card2 from '../component/Card2'
import Toolbar  from '../component/Toolbar'
import Aside from '../component/Aside'


const Main = () => {
    return (
        <>
            <div className="cont">

<Header/>
<Body/>

<Toolbar
adduser={<i class="fas fa-user-plus" style={{backgroundColor:"#2F6CE5"}}> </i> 
}
data ="join group"

/>
<Aside/>
  
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
  
  <Card 
  
  img1="https://picsum.photos/692/220"
  article="🔬️ Education"
  content1="Tax Benefits for Investment under National Pension Scheme launched by Government"
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
  tab="visit"
  user="rakesh"
  views="1.4k views"

  />


<Card2
  
  img1="https://picsum.photos/692/220"
  article="💼️ Job"
  content1="Software Developer "
  datetime= {<i class="fas fa-shopping-bag">Innovaccer Analytics Private Ltd.</i>}
  img2="https://picsum.photos/40/40"
  tab="visit"
  user="rakesh"
  views="1.4k views"

  />

</div>


        </>
    )
}

export default Main
