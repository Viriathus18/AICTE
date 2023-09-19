
import React,{useState} from 'react';
import './Log.css'
import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'


const Log = () => {
    const [action,SetAction]= useState("SignUP");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img src={user_icon} alt='user icon'/>
                <input type='text' placeholder='Username'/>
            </div>}
            
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={email_icon} alt='email icon'/>
                <input type='text' placeholder='Email ID'/>
            </div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={password_icon} alt='password icon'/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password <span>Click here</span></div>}
        
        <div className='submit-container'>
           <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{SetAction("Sign Up" )}}>Sign UP</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{SetAction("Login" )}}>Login</div>
            </div>
    </div>
  )
}

export default Log
