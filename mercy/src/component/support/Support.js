import React from 'react';
import './support.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Support = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1o65fs9', 'template_2e5pvxs', form.current, 'p3Qz-3ENq0ZkWIkXG')
      .then((result) => {
          alert('message sent');
      }, (error) => { 
          alert('error sending message');
      });
      e.target.reset();
  };
  return (
    <div>
      <div className='all-support'>
      <div className="support">
      <div class="support-left">
                    <h2>Get In Touch With Us</h2>
                    <p className='intouch'>You can get in touch with us by sending us an email, or through any of our social medias. You can aswell visit any of our offices. Feel free to report to us about anything.</p>
                    <div class="icons-cont">
                      <div class="row-cont">
                        <i class="fa-solid fa-user"></i>
                        <div class="info">
                          <div class="head-cont">Name</div>
                          <p class="sub-title">P-luxe entreprices</p>
                        </div>
                      </div>
                      <div class="row-cont">
                        <i class="fa-solid fa-location-dot"></i>
                        <div class="info">
                          <div class="head-cont">Address</div>
                          <p class="sub-title">Aba/Ph city</p>
                        </div>
                      </div>
                      <div class="row-cont">
                        <i class="fa-solid fa-envelope-circle-check"></i>
                        <div class="info">
                          <div class="head-cont">E-mail</div>
                          <p class="sub-title">ezealamercy1@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="support-right">
                    <form onSubmit={sendEmail} ref={form}>
                      <div className="form1">
                        <input
                          type='text' placeholder='Your name' name='firstname' required 
                        />
                        <input
                          type='e-mail' placeholder='Your e-mail' required name='mail' 
                        /> 
                      </div>
                      <div className="form2">
                        <input
                          type='text' placeholder='Your Subject' required name='subject' 
                        />
                      </div>
                      <div className="form3">
                        <textarea
                           placeholder='Your Message' name='comment' required 
                        />
                      </div>
                      <button>
                        Send
                      </button>
                    </form>
                  </div>        
      </div>
    </div>
    
    </div>
  )
}

export default Support