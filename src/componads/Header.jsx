import React from 'react';

const Header = () => {
    return (
        <div className='mx-5 mt-10 mb-5 h-20 bg-slate-300 shadow-lg dark:bg-neutral-700 flex justify-between'>
            <div className="text-5xl text-emerald-600 font-bold px-5 py-4"> jadur bakso</div>
            <div className="mx-5 "><img src= 'img/man1.png'className="my-5 h-16 w-16 rounded-full" alt="Avatar" /></div>
        </div>
    );
};

export default Header;
