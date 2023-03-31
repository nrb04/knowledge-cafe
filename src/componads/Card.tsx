import React from 'react';


const Card =  (props) => {
  const {  title, img , pimg } = props.card;
  
    return (
        
  <div className="px-5 w-3/4  bg-white shadow-lg dark:bg-neutral-700">
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
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>

      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <button
        type="button"
        className="" >
        Button
      </button>
    </div>
  </div>
            
        
    );
};

export default Card;