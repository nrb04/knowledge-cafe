import React from 'react';

const QA = () => {
    return (
        <div className=' lg:flex-row justify-center md:container md:mx-auto lg:p-36 mx-10 box-border '>
            <div>QA Saction</div>
<div className='shadow-2xl px-4 py-4 my-5'> Difference between React Native Props and State:<br />
Props are immutable but state is mutable. Props are normally passed from parent component to its child component. But,
state is maintained in each component. Using props, we can change the state of a parent component.</div>
<div className='shadow-2xl px-4 py-4 my-5'>How does useState work?<br />
create a functional component and throw some React hook at it that tracks state, can also update it, and it just works.</div>
<div className='shadow-2xl px-4 py-4 my-5'>Purpose of useEffect other than fetching data?<br />
useEffect can be used to set up a timer that updates the component state after a certain amount of time has passed. It
can also be used to subscribe to events, such as keyboard or mouse events, and perform actions based on those events</div>
<div className='shadow-2xl px-4 py-4 my-5'>How Does React work?<br />
React works by creating a virtual DOM in memory, which is a lightweight representation of the actual DOM. Instead of
manipulating the browser's DOM directly, React manipulates the virtual DOM, where it does all the necessary changes
before making the changes in the browser DOM. React only changes what needs to be changed, which makes it more efficient
than traditional DOM manipulation</div>


        </div>
    );
};

export default QA;