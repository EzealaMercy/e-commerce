import React, {useEffect} from 'react';
import './contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(() =>{
      Aos.init({duration: 1500});
    }, [])
  return (
    <div className="contain">
        <div className='contact-container'>
            <div className='contact-items'>
            <div className="contact">
                <div className="fa">
                <i class= 'fa-solid fa-phone'></i>
                </div>
                <h5>Call</h5>
                <div className='p'><p>08168317293</p></div>
            </div>
            <div className="contact">
                <div className="fa">
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                <h5>Whatsapp</h5>
                <a href="https://wa.me/08168317293" target='blank' rel='no-referrer' ><p>chart with us</p></a>
            </div>
            <div className="contact">
                <div className="fa"><i class="fa-brands fa-facebook"></i></div>
                <h5>Facebbok</h5>
                <a href="https://www.facebook.com/Promise.Ezeala" target='blank' rel='no-referrer'><p>view posts</p></a>
            </div>
            <div className="contact">
                <div className="fa"><i class="fa-brands fa-instagram"></i></div>
                <h5>Instagram</h5>
                <a href="https://www.instagram.com/Mercybliss.Ezeala" target='blank' rel='no-referrer'><p>view posts</p></a>
            </div>
            </div>
        </div>
        <h2>Top Patners</h2>
        <div className="getInTouch">
          <div data-aos='fade-up' data-aos-duration='1200' className="patners">
            <img img src='images/pat2.png' alt='top-patners'/>
            <img src='images/pat1.png' alt='top-patners'/>
            <img src='images/pat5.png' alt='top-patners'/>
            <img src='images/pat4.png' alt='top-patners'/>
            <img src='images/pat3.png' alt='top-patners'/>
          </div>

        </div>
        
    </div>
  )
}

export default Contact