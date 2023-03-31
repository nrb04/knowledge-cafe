import React, { useState,useEffect } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
 
    useEffect(() => {
        fetch('public.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
 
    return (
        <div className='conatiner mx-auto'>
            {
                cards.map(card => <Card
                    key ={card.id}
                    card={card}
                    ></Card>
                    )
            }
        </div>
    );
}
;

export default Cards;