import React, { useState,useEffect } from 'react';

const Cards = () => {
    const [cards, setcards] = useState([]);
 
    useEffect(() => {
        fetch('public.json')
            .then(res => res.json())
            .then(data => setcards(data))
    }, []);

    return (
        <div>
            
        </div>
    );
}
;

export default Cards;