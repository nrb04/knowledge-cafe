import React from 'react';


const Cart = ({ cart, reading }) => {
      let totalTime = 0;
    for(const card of reading){
        totalTime = totalTime + parseInt(card.reading)
    }
    return (
        <div >
            <div className='shadow-2xl lg:px-4 py-4 my-5'>
                <h1 >Time On Read: {totalTime}</h1>
             <h1 className='lg:mb-4 text-2xl font-bold '>Bookmarked Blog:{cart.length}</h1>
                {
                    cart.map(card=><h2 className='my-4 text-lg text-center border-double border-2 shadow-lg border-bg-neutral-700 'key={card.id} > {card.description}</h2>)
                }
            </div>
        </div>
    );
};

export default Cart;
