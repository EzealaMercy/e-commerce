import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './component';
import { Footer } from './containers';
import CartsData from './cart/CartsData';
import Hair from './cart/Hair';
import { BrowserRouter as Router} from 'react-router-dom';
import Cathair from './cart/cathair';
import ClockLoader from "react-spinners/ClockLoader";




function App() {
    const[loading, setload] = useState(false);
     useEffect(()=> {
        setload(true)
        setTimeout(()=> {
            setload(false)
        }, 6000)
     }, [])
    const {productitems} = CartsData;
    const [cartitems, setcartitems] = useState([]);


    const handleproduct = (product) => {
        const productExist = cartitems.find((item) => item.id === product.id);
        if(productExist){
            setcartitems(
                cartitems.map((item)=> (item.id === product.id
                    ? {...productExist, quantity : productExist.quantity + 1 }
                    : item ))
            );
        } else {
            setcartitems([...cartitems, {...product, quantity:1}]);
        }
        alert('item added to cart')
      };

      const handleremove = (product) => {
        const productExist = cartitems.find((item) => item.id === product.id);
        if (productExist.quantity === 1){
            setcartitems(cartitems.filter((item) => item.id !== product.id));
        }else{
            setcartitems(
                cartitems.map((item) => 
                 item.id === product.id 
                  ? { ...productExist, quantity: productExist.quantity -1} 
                  : item
                  )
            );
        };
      };

      const handleclear = () => {
        setcartitems([]);
      }

      const handlerem = (product) => {
        setcartitems(cartitems.filter((item) => item.id !== product.id));
      }

    return(
        <div className='app'>
            {
                loading? 
                (   
                   <div className="appload">
                    <ClockLoader
                    color={'rebeccapurple'}
                    loading={loading}
                    size={40}
                    />
                   </div>
                )
                :
                (
                <div>
                    <Router>
                        <Cathair />
                        <Navbar cartitems = {cartitems}/>
                        <Hair productitems= {productitems} 
                            cartitems={cartitems} 
                            handleproduct={handleproduct}
                            handleremove = {handleremove}
                            handleclear = {handleclear}
                            handlerem = {handlerem}
                        />
                    </Router>
                    <Footer/>
                </div>                    
                )
            
            }




        </div>
    )
}

export default App;