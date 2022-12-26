import React, { useState } from "react";
 import './Auth.css'
 import icon from '../../assets/icon.png'


const Auth =()=> {
        const[isSignup,setIsSignup]=useState(false)

        const handleSwitch=()=>{
                setIsSignup(!isSignup)
        }
    return(
            <section class='auth-section'>
                    <div class='auth-container'>
                                { !isSignup && <img src ={icon} alt='stack overflow' className='login-logo'/> }
                        <form>
                                {

                                        isSignup&&(
                                                <label htmlFor='name'>
                                                        <h4>Display Name</h4>
                                                        <input type="text" id='name' name='name'/>
                                                        {isSignup &&  <p style={{color:'#666767', fontSize:"13px"}}> Passwords must contains atleast eight <br/>characters, including atleast 1 letter and 1<br/> number
                                                                </p>}
                                                                {

                                                                        isSignup &&(
                                                                                <label htmlFor='check'>
                                                                                        <input type='checkbox' id='check'/>
                                                                                        <p style={{fontSize:"13px"}}>
                                                                                           Opt-in to recieve occasional,<br/> product updates, use research invitations,<br/>
                                                                                           company announcements , and digests
                                                                                        </p>
                                                                                        </label>
                                                                        ) 
                                                                }

                                                </label>
                                        )
                                }
                        <label htmlFor="email">
                         <h4>Email</h4>
                         <input type="email" name='email' id='email'/>
                          </label>

                          <label htmlFor="password">
                                  <div>
                         <h4>Password</h4>
                        { !isSignup && <h4>Forgot Password?</h4>}
                         </div>

                         <input type="password" name='password' id='password'/>
                          </label>
                          <button  type='submit' className='auth-btn'>{isSignup ? 'Sign up' :'Log in'}</button>
                         {isSignup&&(
                                <p style={{color:'#666767', fontSize:"13px"}}>
                                        By clicking "Sign-up", you agree to our 
                                        <span style={{color:'#007ac6'}}>terms of<br/> service</span>,
                                        <span style={{color:'#007ac6'}}>privacy policy</span> and
                                        <span style={{color:'#007ac6'}}>cookie policy</span>
                                </p>
                         )}

                        </form>
                        <p>
                           {isSignup ? 'Already have an account': "Don't have an acoount?"}
                                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in": 'sign up'}</button>
                                </p>
                    </div>
            </section>
    )
}