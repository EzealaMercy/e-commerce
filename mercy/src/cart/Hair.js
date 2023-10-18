import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {About, Savice, Signup, Signin, Support, Home} from '../component';
import Carts from './Carts';
import Cartpg from '../cartpg/Cartpg';
import Card from './card';


const Hair = ({productitems, cartitems, handleproduct, handleremove, handleclear, handlerem}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/about' element= {<About />} />
            <Route path='/savice' element= {<Savice />} />
            <Route path='/cart' element= {<Carts productitems = {productitems} handleproduct = {handleproduct} />} />
            <Route path='/support' element= {<Support />} />
            <Route path='/signin' element= {<Signin />} />
            <Route path='/signup' element= {<Signup />} />
            <Route path='/card' element= {<Card cartitems={cartitems} handleproduct={handleproduct} handleremove={handleremove} handleclear={handleclear} handlerem={handlerem} />}/>
            <Route path='/cartpg' element= {<Cartpg cartitems={cartitems} handleproduct={handleproduct} handleremove={handleremove} handleclear={handleclear} handlerem={handlerem}/>} />        
      </Routes>
    </div>
  )
}

export default Hair