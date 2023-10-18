import React from 'react';
import './cartpg.css';
import { Link } from 'react-router-dom';

const Cartpg = ({cartitems, handleproduct, handleremove, handleclear, handlerem}) => {

  const totalprice = cartitems.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <article>
      <div className="cartpg">
        <h2>MY CARTS</h2>
        <div className="clear">
          {cartitems.length >=1 && (
            <button className='clearbtn' onClick={handleclear}>clear all cart</button>
          )}
        </div>
        {cartitems.length === 0 && (<div className='empty'>No items added to cart</div>)}
        {cartitems.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart-img">
              <img src= {item.image} alt={item.title} loading='lazy'/>
              <h3>{item.title}</h3>
            </div>
            <div className="cart-btn">
              <button className='calc' onClick={() => handleproduct(item) }>+</button>
              <button className='calc'>{item.quantity}</button>
              <button className='calc' onClick={() => handleremove(item) }>-</button>
            </div>
            <div className="cart-price">
              <button className='price'>${item.quantity * item.price}</button>
              <button className='remove'  onClick={() => handlerem(item)}>Remove</button>
            </div>
          </div>
        ))}

        <div className="total">
            <span className='tot'>Total Price of your Cart</span>
            <span className='tot-price'>Rs-${totalprice}</span>
        </div>
        <div className='checkout'><Link to= '/Card'>Checkout</Link></div> 
      </div>
    </article>
  )
}

export default Cartpg