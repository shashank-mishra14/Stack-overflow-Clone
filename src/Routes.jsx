 import React from "react";
 import {Switch,Route} from 'react-router-dom'
 import Home from './pages/Home/Home'
 import Auth from './pages/Auth/Auth'
 import Questions from './pages/Questions/Questions'


 const Routes =()=>{

    return(

 <Switch>

      <Route exact path='/welcome' component={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Questions' element={<Questions/>}/>

 </Switch>
    )
 }

 export default Routes