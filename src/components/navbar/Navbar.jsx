import React from "react";
import { Link } from "react-router-dom";
import  logo from '../../assets/logo.png'
const Navbar =()=>{

return(
    <navbar>    
        <div className='navbar'>
            <Link to ='/' className='nav-item nav-btn'> 
            <img src={logo} alt='logo'/>
             </Link>
             <Link to ='/' className='nav-item nav-btn'></Link>
              <Link to ='/' className='nav-item nav-btn'></Link>
             <Link to ='/' className='nav-item nav-btn'></Link>
            
        </div>
    </navbar>

)

}

export default Navbar
