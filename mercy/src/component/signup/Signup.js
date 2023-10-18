import React from 'react';
import './signup.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [formData, Setform] = useState({
    mail: '', password: '', confirm: '', username: '', isAgree: false, Gender: '',
  })

  function handlechange (event){
    const {name, type, value, checked} = event.target
    Setform(prevform => {
      return {
        ...prevform, 
        [name]: type===checked? checked:value
      }
    })
  }
  function handlesubmit(event){
    event.preventDefault ()
  }
  return (
    <div>
      <div className='signup'>
      <form action="">
        <h2>REGISTER</h2>
        <h5>Already have an account? <Link to = '/Signin'>Sign In</Link></h5>
        <div className="frm1">
          <label htmlFor="label">Username</label>
          <input
            type='text' placeholder='Enter your username' name='username' required value={formData.username} onChange={handlechange}
          />
        </div>
        <div className="frm1">
          <label htmlFor="label">E-mail address</label>
          <input
            type='e-mail' placeholder='Enter your e-mail address' name='mail' required value={formData.mail} onChange={handlechange}
          />
        </div>
        <div className="frm1">
          <label htmlFor="label">Password</label>
          <input
            type='password' placeholder='Enter your password' name='password' required value={formData.password} onChange={handlechange}
          />
        </div>
        <div className="frm1">
          <label htmlFor="label">Confirm Password</label>
          <input
            type='password' placeholder='Please confirm password' name='confirm' required value={formData.confirm} onChange={handlechange}
          />
        </div>
        <fieldset>
          <legend>Gender</legend>
          <input
            type='radio' id='male' name='Gender' value='male' required checked={formData.Gender==='male'} onChange={handlechange}
          />
          <label htmlFor="label">Male</label><br></br>
          <input
            type='radio' id='female' name='Gender' value='female' required checked={formData.Gender==='female'} onChange={handlechange}
          />
          <label htmlFor="label">Female</label><br></br>
        </fieldset>
        <div className="frm2">
          <input
            type='checkbox' id='isAgree' name='isAgree' required checked={formData.isAgree} onChange={handlechange}
          />
          <label htmlFor="label">i agree to terms and conditions </label><br></br>
        </div>
        <div className="boton">
          <button onSubmit={handlesubmit}>SUBMIT</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Signup