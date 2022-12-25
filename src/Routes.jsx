 import React from "react";
 import {Switch,Route} from 'react-router-dom'
 import Home from './pages/Home/Home'
 import Auth from './pages/Auth/Auth'


 const Routes =()=>{

    return(

 <Switch>

      <Route exact path='/welcome' component={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>


 </Switch>
    )
 }

 export default Routes