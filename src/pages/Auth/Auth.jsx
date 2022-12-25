import React, { useState } from "react";
 import './Auth.css'
 import icon from '../../assets/icon.png'


const Auth =()=> {
        const[isSignup,setIsSignup]=useState(false)
    return(
            <section class='auth-section'>
                    <div class='auth-container'>
                                { !isSignup && <img src ={icon} alt='stack overflow' className='login-logo'/> }
                        <form>
                        <label htmlFor="email">
                         <h4>Email</h4>
                         <input type="email" name='email' id='email'/>
                          </label>

                          <label htmlFor="password">
                         <h4>Email</h4>
                         <input type="password" name='password' id='password'/>
                          </label>
                        </form>
                    </div>
            </section>
    )
}