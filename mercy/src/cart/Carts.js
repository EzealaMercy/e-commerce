import React from 'react';
import { useState, useEffect } from 'react';
import './cart.css';
import Aos from 'aos';
import 'aos/dist/aos.css'



const Carts = ({productitems, handleproduct }) => {
  useEffect(() =>{
    Aos.init({duration: 1500});
  }, [])
  const[element, setelement] = useState(8);
  const[product, setproduct] = useState(productitems);
  const [category, setcategory] = useState('All');
  const slice = product.slice(0, element)
  const loadmore = () => {
    setelement(element + element)
  }


  useEffect(()=>{
    if(category === 'All'){
      setproduct(productitems)
    }
    if(category === 'hair'){
      const filterproduct = productitems.filter(items => items.category ==='hair')
      setproduct(filterproduct)
    }
    if(category === 'cos'){
      const filterproduct = productitems.filter(items => items.category ==='cos')
      setproduct(filterproduct)
    }
  }, [category])


  return (
    <div>
      <div className='carts'> 
        <div className="cart-item">
          <h2>Our Menu</h2>
          <div data-aos='fade-down' className="category">
            <button className= {`all-product ${category === 'All' ?
             'btnActive' : ''}`} 
             onClick={() => setcategory('All')}>All</button>
            <button className={`cosmetics ${category === 'cos' ?
             'btnActive' : ''}`} 
             onClick={() => setcategory('cos')}>Cosmetics</button>
            <button className={`hair ${category === 'hair' ?
             'btnActive' : ''}`} 
              onClick={() => setcategory('hair')}>Hair</button>
          </div>

        </div>
        <div className='cathair'>
            {slice.map((productitem) =>(
              <div data-aos='fade-up' className='cards'>
                <div className="img">
                  <img src={productitem.image} alt='photo' loading='lazy'/>
                </div>
                <div className="details">
                  <h3>{productitem.title}</h3>
                  <p>$<span>{productitem.price}</span></p>
                  <div className="star">
                  <i class = 'fa-solid fa-star'></i>
                  <i class = 'fa-solid fa-star'></i>
                  <i class = 'fa-solid fa-star'></i>
                  <i class = 'fa-solid fa-star'></i>
                  <span className='starwhite'><i class = 'fa-solid fa-star'></i></span>
                  </div>
                  <button className='order' onClick={() => handleproduct(productitem)}><i class= 'fa-solid fa-cart-shopping'></i>Add to cart</button>
                  <a href="https://wa.me/08168317293" target='blank' rel='no-referrer' className='addbtn'><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>                              
            ))}
        </div>
        <div className="load" onClick={() => loadmore()}>Load more</div>
      </div>
    </div>
  );
};

export default Carts