import React, {useState} from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({cartitems}) => {
    const[toggleMenu, SetToggleMenu] = useState(false);
  return (
            <div className="navbar-items">
                <div className="logo-name">
                    <h3>P-luxe <span>enter<span className='i'>p</span>rices</span></h3>
                </div>
                <ul className='link'>
                    <li><NavLink to= '/' className={(navclass) => navclass.isActive? 'active-link' : ''} >Home</NavLink></li>
                    <li><NavLink to= '/About' className={(navclass) => navclass.isActive? 'active-link' : ''} >About</NavLink></li>
                    <li><NavLink to= '/Savice' className={(navclass) => navclass.isActive? 'active-link' : ''} >Service</NavLink></li>
                    <li><NavLink to= '/Cart' className={(navclass) => navclass.isActive? 'active-link' : ''} >Shop</NavLink></li>
                    <li><NavLink to= '/Support' className={(navclass) => navclass.isActive? 'active-link' : ''} >Contact</NavLink></li>
                </ul>

                <div className="cart">
                    <NavLink to= '/cartpg'><i class= 'fa-solid fa-cart-shopping'></i>
                    <span>{cartitems.length === 0 ? '0' : cartitems.length}</span>
                    </NavLink>
                </div>
                <div className="sign-up">
                    <button className='login-btn'><NavLink to= '/Signin' >Signin</NavLink></button>
                    <button className='sign-up-btn'><NavLink to= '/Signup'>Signup</NavLink></button>
                </div>
                <div className="toggle">
                    <div className="open">
                        <i class= 'fa-solid fa-bars' onClick={() => SetToggleMenu(true)}></i>
                    </div>
                    {toggleMenu && (
                        <div className="menu-btn">
                            <div className="close">
                                <i class= 'fa-solid fa-xmark' onClick={() => SetToggleMenu(false)}></i> 
                            </div>  
                            <ul  onClick={()=> SetToggleMenu(false)}>
                                <li><NavLink to= '/' className={(navclass) => navclass.isActive? 'active-link' : ''} >Home</NavLink></li>
                                <li><NavLink to= '/About' className={(navclass) => navclass.isActive? 'active-link' : ''} >About</NavLink></li>
                                <li><NavLink to= '/Savice' className={(navclass) => navclass.isActive? 'active-link' : ''} >Service</NavLink></li>
                                <li><NavLink to= '/Cart' className={(navclass) => navclass.isActive? 'active-link' : ''} >Shop</NavLink></li>
                                <li><NavLink to= '/Support' className={(navclass) => navclass.isActive? 'active-link' : ''} >Contact</NavLink></li>
                                <li><i class='fa-solid fa-right-to-bracket'></i><button><NavLink to= '/Signin'>Signin</NavLink></button></li>
                            </ul> 
                        </div>
                    )}
                </div>
            </div>
  )
}

export default Navbar;