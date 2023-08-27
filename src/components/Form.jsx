import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = ({title, handleClick}) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className='form-box'>
      <div className='input-box'>
      <p>Username</p>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
      />
      </div>
      <div className='input-box'>
      <p>Password</p>
      <input
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      </div>
      <div>
      <button className='button'
        onClick={handleClick}
      >
        {title} 
        {/* <Link to='/rooms'/> */}
      </button>
      </div>
    </div>
  );
};

export {Form}; 
