import React from "react";
import { Link } from "react-router-dom";
import  logo from '../../assets/logo.png'
import  search from '../../assets/search.svg'
import Avatar from '../../assets/Button/Button'
import './Navbar.css'
const Navbar =()=>{

    var User = null

return(
    <navbar>    
        <div className='navbar'>
            <Link to ='/' className='nav-item nav-logo'> 
            <img src={logo} alt='logo'/>
             </Link>
             <Link to ='/' className='nav-item nav-btn'>About</Link>
              <Link to ='/' className='nav-item nav-btn'>Products</Link>
             <Link to ='/' className='nav-item nav-btn'>For Teams</Link>
             <form >
                    <input type="text" placeholder= 'Search...'/>
                    <img src={search} alt="search" width ="18" className='search-icon'/>

             </form>
            { User === null ?
            <Link to='/Auth' className='nav-items nav-links'>Log in</Link> : 
            <>

            <Link to='/'><Avatar>M</Avatar></Link>

            <Button> Log out</Button>
             </> 
            }            
        </div>
    </navbar>

)

}

export default Navbar
