import React from 'react';
import Header from '../header/Header';
import Feature from '../feature/Feature';
import Brand from '../brand/Brand';
import Info from '../info/Info';
import Ctas from '../ctas/Ctas';
import FAQs from '../Faqs/FAQs';
import Review from '../review/Review';
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <div >
            <Header />
            <Feature />
            <Brand />
            <Info />
            <Ctas />
            <FAQs />
            <Review />
            <Contact /> 
            
    </div>
  )
}

export default Home