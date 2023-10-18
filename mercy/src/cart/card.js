import React from 'react';
import { useState } from 'react';

const Card = ({cartitems, handleproduct, handleremove, handleclear, handlerem}) => {
    const totalprice = cartitems.reduce((price, item) => price + item.quantity * item.price, 0)
    const [formData, Setform] = useState({
        mail: '', username: '', phone: '', address: '', city: '', state: ''
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
    <div className='cardpg'>
        <div className="address">
            <h2>Billing Address</h2>
            <form onSubmit={handlesubmit}>
                <div className="frm2">
                    <input
                    type='text' placeholder='Enter your Name' name='username' required value={formData.username} onChange={handlechange}
                    />
                </div>
                <div className="frm2">
                    <input
                    type='mail' placeholder='Enter your E-mail address' name='mail' required value={formData.mail} onChange={handlechange}
                    />
                </div>
                <div className="frm2">
                    <input
                    type='number' placeholder='Enter your Phone number' name='phone' required value={formData.phone} onChange={handlechange}
                    />
                </div>
                <div className="frm2">
                    <input
                    type='text' placeholder='Enter your Address' name='address' required value={formData.address} onChange={handlechange}
                    />
                </div>
                <div className="frm2">
                    <input
                    type='text' placeholder='Enter your City' name='city' required value={formData.city} onChange={handlechange}
                    />
                </div>
                <div className="frm2">
                    <input
                    type='text' placeholder='Enter your State' name='state' required value={formData.state} onChange={handlechange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
        <div className="card-sum">
            <div className="prize">
                <div className="sum-text">
                    <h3>Total  product</h3>
                    <h3>Product Price</h3>
                    <h3>Shipping fee</h3>
                </div>
                <div className="sum-price">
                    <h3>{cartitems.length}</h3>
                    <h3>${totalprice}</h3>
                    <h3>$2.00</h3>
                </div>
            </div>
            <div className="total-prize">
                <h2>Total</h2>
                <h2 className='price'>${totalprice + 2}</h2>
            </div>
            <button>Place Order Now</button>
            <h5>oR</h5>
            <buttton className='whtapp'><a href='"https://wa.me/08168317293"'><span>Order on Whatsapp</span><i class="fa-brands fa-whatsapp"></i></a></buttton>
        </div>
    </div>
  )
}

export default Card
  