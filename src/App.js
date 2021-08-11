import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Main from './pages/Main'
import Logeduser from './pages/Logeduser'

const App = () => {
  return (
    <>
     
     <Switch>          
          <Route exact path='/' component={Main} />
          <Route exact path='/logeduser' component={Logeduser}/>
          

     </Switch>

    </>
  )
}

export default App
