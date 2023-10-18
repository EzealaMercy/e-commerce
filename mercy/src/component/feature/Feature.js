import React from 'react';
import './feature.css'

const Feature = () => {
  return (
    <div className='feature-container'>
        <div className="info">
            <h3>390<span>+</span></h3>
            <p>User Active</p>
        </div>
        <div className="info">
            <h3>340<span>+</span></h3>
            <p>Trusted By Clients</p>
        </div>
        <div className="info">
            <h3>$2m<span>+</span></h3>
            <p>Transactions</p>
        </div>       
    </div>
  )
}

export default Feature