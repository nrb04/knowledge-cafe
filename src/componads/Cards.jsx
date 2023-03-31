import React, { useState,useEffect } from 'react';
import Card from './Card';
import Cart from './Cart';


const Cards = () => {
    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);
 
    useEffect(() => {
        fetch('public.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
    const handleAddToCart = (card) => {
       const newCart = [...cart, card];
        setCart(newCart);
 }
    return (
        <div className="flex  mx-20 ">
          <div className="px-5 w-3/4  bg-white shadow-lg dark:bg-neutral-700" >  {
                cards.map(card => <Card key={card.id}
                    card={card}
                    handleAddToCart={handleAddToCart}
                    ></Card>
                    )
            }
            </div>
            <div className="w-1/4 bg-white shadow-lg dark:bg-neutral-700" >
                    <Cart cart={cart}></Cart>
      
            </div>
        </div>
    );
}
;

export default Cards;
