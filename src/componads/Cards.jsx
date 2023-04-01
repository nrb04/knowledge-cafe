import React, { useState,useEffect } from 'react';
import Card from './Card';
import Cart from './Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);
    const [readTime, setReadTime] = useState([]);
    
 
    useEffect(() => {
        fetch('public.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
    const handleAddToCart = (card, id) => {
        const found = cart.find((card) => card.id == id);
       if (found) {
      toast.error("Already Bookmarked");
    } else {
      toast("Succesfully Bookmarked");
        const newCart = [...cart, card];
        setCart(newCart);
    }
    };



   const handleReadTime = (reading) => {
    const newReadTime = [...readTime, reading];
    setReadTime(newReadTime);
   };
    
    return (
        <div className="lg:flex justify-center  md:mx-auto ">
          <div className="content-center lg:px-10 lg:w-2/4  bg-white shadow-lg dark:bg-neutral-700" >  {
                cards.map(card => <Card key={card.id}
                    card={card}
                    handleAddToCart={handleAddToCart}
                   handleReadTime={handleReadTime}
                ></Card>
                    )
            }
               
             
            </div>
            <div className="w-1/4 bg-white shadow-lg dark:bg-neutral-700" >
                    <Cart cart={cart} reading={readTime} ></Cart>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
            </div>
        </div>
    );
}
;

export default Cards;
