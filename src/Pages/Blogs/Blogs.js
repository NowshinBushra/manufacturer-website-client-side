import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-6 lg:mx-12 mt-16'>
            <h1 className='text-5xl text-accent font-bold text-center mb-6'>Q/A</h1>
            <h3 className='text-xl font-bold'>1. How will you improve the performance of a React Application?</h3>
            <p>Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import.
                Windowing or list virtualization in React.
                Lazy loading images in React. lazy loading images prevents the creation of unnecessary DOM nodes, boosting the performance of our React application.</p>

            <h3 className='text-xl font-bold'>2. How does prototypical inheritance work?</h3>
            <p>The Prototypal Inheritance is a method by which an object can point to another object and inherit all its properties and methods. JavaScript only has one construct: objects. Each object has a private property which holds a link to another object, then this called its prototype. When trying to access a property of an object, the property will be sought on the object, the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>

            <h3 className='text-xl font-bold'>3. Why you do not set the state directly in React?</h3>
            <p>We should never update the state directly because, When we directly update the state, it does not change this.state immediately. It creates a pending state transition, and accessing it after calling this method will only return the present value. And so we will lose control of the state across all components.</p>

            <h3 className='text-xl font-bold'>4. What are the different ways to manage a state in a React application?</h3>
            <p>There are four main types of state to manage a state : Local state, Global state, Server state, URL state. Local state is most often managed in React using the useState hook.
                There are several other ways to manage states in React, including the use of:
                Hooks,
                React Context API,
                etc.</p>

            <h3 className='text-xl font-bold'>5. What is a unit test? Why should write unit tests?</h3>
            <p>Unit Testing is the process of checking small pieces of code to deliver information early and often, speeding your testing strategies.
                Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable environment. Unit testing saves time and money, and helps developers write better code, more efficiently.</p>
        </div>
    );
};

export default Blogs;