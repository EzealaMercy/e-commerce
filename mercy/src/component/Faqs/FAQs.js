import React, {useEffect} from 'react';
import { useState } from 'react';
import { faqData } from '../Data';
import './faq.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const FAQs = () => {
    useEffect(() =>{
      Aos.init({duration: 1000});
  }, [])
  const [expand, setExpand] = useState(-1);

  const handleClick = (next) => {
    setExpand ((current) =>{
    if(current === next){
      return -1;
    }else{
      return next
    }
    })
  }

  const render = faqData.map((item, index) => {
    const isExpand = index===expand;

    const dropdown = (
      <span className='dropdown'>{isExpand? <p><i class = 'fa-solid fa-caret-up'></i></p>:<p><i class = 'fa-solid fa-caret-down'></i></p>}</span>
    );
    const icon = (
      <span className='icon'>{isExpand?<i class= 'fa-solid fa-comment-dots' style={{color: "rgb(8, 87, 65)", backgroundColor:"white", padding: "4px 7px", borderRadius: "50%"}}></i>:<i class= 'fa-solid fa-question' style={{color: "whitesmoke", backgroundColor:"rgb(8, 87, 65)", padding: "4px 7px", borderRadius: "50%"}}></i> }</span>
    );

    return (
      <div className='content-container'>
        <div key={item.id} className= 'content'>
          <div onClick={() => handleClick (index)}>
          {icon}
          {dropdown}
          <span className="question">{item.quest}</span>
  
          </div>
          {isExpand && <div data-aos='fade-up' data-aos-duration='1000' className='answer'>{item.ans}</div>}
        </div>
      </div>
    );
  });

  return(
    <div className='faq-container'>
      <div className='text'>
      <h1>Frequently Asked Questions</h1>
      <h3>Below is the list of possible questions and there answers. We hope these are usefull to you.</h3>
      </div>
      <div className='render'>{render}</div>
      <h3 className='faq-contact'>Still have question? Contact us via our <a href=''>support center</a> or email us at <a href=''>ezealapromise@gmail.com</a></h3>
    </div>
  )
}

export default FAQs