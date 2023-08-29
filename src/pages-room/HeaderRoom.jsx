import React from 'react';
import './../Room.css';
import { Link } from 'react-router-dom';

const HeaderRoom = () => {
  return (
    <div className='header'>
      <img src='./../FE-2-design_favicon.png'/>
      <button onClick={<Link to='/login'/>}>Log Out</button>
    </div>
  )
}

export default HeaderRoom;
