import React from 'react';

const Blog = () => {
  return (
    <div className='text-center md:w-2/3 md:m-auto mx-4'>
      <h1 className='font-semibold'>1. What is the purpose of React Router?</h1>
      <p>- React Router is used to navigate across multiple pages without  
        refreshing or reloading the page. Which basically means it's used to
        create Single Page Application. React Router enables the website to give an app like experience.
      </p>
      <br />
      <h1 className='font-semibold'>2. How does context api work?</h1>
      <p>- Context api provides a way to pass data through the component tree without having to 
        pass prop down manually at every level. In react, data flow is unidirectional and data can be passed
        top to immediate down(parent to immediate child). Context api provides a way to pass data from top to lower levels directly without
        props drilling. 
        
      </p>
      <br />
      <h1 className='font-semibold'>3. Explain 'useRef()' hook.</h1>
      <p>- useRef() is a react hook that allows us to access DOM element directly and preserve data between
        renders. useRef() hook creates references, calling it with an initial value
        return that reference object. This reference has a property called current. This 
        property can be used to read the reference value or update it. Between component re-renders, the 
        value of the reference is persistent. Moreover,unlike  updating state , updating reference doesn't trigger
        component re-rendering. 
         </p>
    </div>
  );
};

export default Blog;