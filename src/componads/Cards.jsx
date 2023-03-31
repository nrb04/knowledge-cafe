import React, { useState,useEffect } from 'react';
import Card from './Card';

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
        <div className='conatiner mx-auto'>
            {
                cards.map(card => <Card key={card.id}
                    card={card}
                    handleAddToCart={handleAddToCart}
                    ></Card>
                    )
            }
        </div>
    );
}
;

export default Cards;
