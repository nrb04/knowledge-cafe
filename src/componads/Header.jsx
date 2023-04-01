import React from 'react';

const Header = () => {
    return (
        <div className='mx-auto  mt-10 mb-5 h-25 w-9/12 bg-slate-300  shadow-lg dark:bg-neutral-700 flex justify-between'>
            <div className="text-4xl text-emerald-600 font-bold pl-5 mt-5"> JADUR Bhakso</div>
            <div className="mr-10 mt-3 "><img src= 'img/man1.png'className=" h-16 w-16 rounded-full" alt="Avatar" /></div>
        </div>
    );
};

export default Header;
