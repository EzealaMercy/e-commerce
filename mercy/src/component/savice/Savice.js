import React, {useEffect} from 'react';
import './savice.css'
import Ctas from '../ctas/Ctas';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Savice = () => {
  useEffect(() =>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <div className="sav-all">
      <div className='service'  style={{backgroundImage: `url(${'./images/luxe-hair.jpg'})`}}>
        <div data-aos='zoom-in-down' className="sav1">
          <h2>P-LUXE HAIRS & COSMETICS</h2> 
          <p>We believe in the power of natural ingredients, and that with scientific report, creats the most effective resuts. Whatever your skin and hair type and age are, our huge range of the latest skin care ingredients a tailored just for you</p>
          <button><Link to= '/Cart'>Shop Now</Link></button> 
        </div>
      </div>
      <div className="sav2">
        <h2 className='hej'>CELEB HAIR & COSMETICS</h2> 
        <p>We believe in the power of natural ingredients, and that with scientific report, creats the most effective resuts. Whatever your skin and hair type and age are, our huge range of the latest skin care ingredients a tailored just for you</p>
      </div>
      <div className="sav3" >
        <div className="sav-flex">
          <img src='images/p8.jpg' alt='lotion' loading='lazy'/>
        </div>
        <div className="sav-flex sav-text">
          <i class= 'fa-solid fa-spinner'></i>
          <h3>NATURAL PRODUCTS</h3>
          <p>Sets every skin need free, with natural organic product.</p>
        </div>
        <div  className="sav-flex">
          <img src='images/p9.jpg' alt='lotion' loading='lazy' />
        </div>
        <div  className="sav-flex sav-text">
          <i class= 'fa-solid fa-lightbulb'></i>
          <h3>BEAUTY INSPIRED</h3>
          <p>Beauty is not just poducts, but also inspiration and feeling.</p>
        </div>
        <div  className="sav-flex">
          <img src='images/hair15.jpg' alt='lotion' loading='lazy'/>
        </div>
        <div  className="sav-flex sav-text">
          <i class= 'fa-solid fa-explosion'></i>
          <h3>THE LUXY HAIR</h3>
          <p>Spicing up your hair with seemless extentions and more volume.</p>
        </div>
      </div>
      <Ctas />
    </div>

  )
}

export default Savice