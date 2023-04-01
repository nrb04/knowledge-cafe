

const Card = (props) => {
const { date,name,reading, title, img, pimg, description, id } = props.card;
//  const handleAddToCart = props.handleAddToCart;
 
  
 
    return (
        
  <div >
    <a href="#!">
      <img
        className="rounded-t-sm  w-full h-96"
        src={img}
        alt="" />
        </a>
         <div className="md:flex justify-between w-full">
   <div className=" md:flex space-x-4 item-center my-7 ">  <img className="w-10 h-10 rounded-full" src={pimg} alt=""/>
    <div className="font-medium dark:text-white">
              <div>{name}</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{date}Days ago)</p>
            </div>
          </div>
          <div className="md:flex  my-10"> 

              <h5 >{reading} min read </h5> <button onClick={() => props.handleAddToCart(props.card, id )} className='btn-cart'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>

                </button>
          </div>

</div>
                <div className="p-6"> 
                    
      <h5
        className=" w-full mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
                    </h5>
        

      <p className=" w-full mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {description}
      </p>
         <a onClick={()=>props.handleReadTime(props.card)} className="text-left mt-8 underline text-blue-500" ><button>Mark as read</button></a>
        
        </div>
          
  </div>
            
        
    );
};

export default Card;
