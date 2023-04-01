import { useState } from "react";
import Cart from './Cart';


const Card = (props) => {
const { reading, title, img, pimg, description, id } = props.card;
//  const handleAddToCart = props.handleAddToCart;
 
  
 
    return (
        
  <div >
    <a href="#!">
      <img
        className="rounded-t-lg  w-full h-96"
        src={img}
        alt="" />
          </a>
        <img src={pimg} className="my-5 h-16 w-16 rounded-full" alt="Avatar" />
                <div className="p-6"> 
                    
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
                    </h5>
          <h4 >{reading} min read </h4>          <button onClick={() => props.handleAddToCart(props.card, id )} className='btn-cart'>
                Add to Cart
                </button>

      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {description}
      </p>
         <a onClick={()=>props.handleReadTime(props.card)} className="text-left mt-8 underline text-blue-500" ><button>Mark as read</button></a>
        </div>
          
  </div>
            
        
    );
};

export default Card;
