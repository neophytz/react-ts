import React from 'react'
import { useContext } from "react";
import { UserContext, UserProvider } from '../hooks/useContext';

export const Blog = () => {
  return (
    <UserProvider>
      <div className='p-3 bg-dark rounded'>
          <Component2 />
      </div>
    </UserProvider>
  );
}

function Component2() {
  console.log('render 2')
  return (
    <div className='p-3 bg-light rounded'>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  console.log('render 3')
  return (
    <div className='p-3 bg-warning rounded'>
      <h1>Component 3</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  console.log('render 4')
  return (
    <div className='p-3 bg-danger rounded'>
      <h1>Component 4</h1>
      <Component5 />
    </div>
  );
}

function Component5() {
  const uContext = useContext(UserContext);

  return (
    <div className='p-3 bg-white rounded'>
      <h1>Component 5</h1>
      <h2 className='text-dark'>{`Hello ${uContext.user} again!`}</h2>
      <button className='btn btn-primary' onClick={() => uContext.setUser("Sachin rocks!")}>
        Maar de!
      </button>
    </div>
  );
}
