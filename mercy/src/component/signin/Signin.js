import React from 'react';
import './sign.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Signin = () => {
  const [formData, Setform] = useState({
    mail: '', password: '',
  })

  function handlechange (event){
    Setform(prevform => {
      return {
        ...prevform, 
        [event.target.name]:event.target.value
      }
    })
  }
  function handlesubmit(event){
    event.preventDefault ()
  }
  return (
    <div>
      <div className='signall'>
      <div className="signlog">
        <h5>New user? <Link to = '/Signup'>Sign Up</Link></h5>
      <div className="sign">
        <img src='images/team.png' alt='photo' />
        <div className="sign-items">
          <h2>WELCOME TO <span className='p'>P-LUXE</span><span className='e'> ENTER<span className='i'>P</span>RICES</span></h2>
          <p>login to continue</p>
          <form onSubmit={handlesubmit}>
            <div className="frm1">
              <input
              type='mail' placeholder='e-mail' name='mail' required value={formData.mail} onChange={handlechange}
              />
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="frm1">
              <input 
              type='password' placeholder='password' name='password' required value={formData.password} onChange={handlechange}
              />
              <i class="fa-solid fa-lock"></i>   
            </div>
            <div className="send">
              <button>LOGIN</button>
              <a href=''>Forgot password?</a>
            </div>        
          </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Signin