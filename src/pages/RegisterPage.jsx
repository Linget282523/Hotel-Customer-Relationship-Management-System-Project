import React from 'react';
import {Link} from 'react-router-dom';
import SignUp from '../components/SignUp';
import './Pages.css';

const RegisterPage = () => {
  return (
    <div className='form-box-in'>
      <h1>Register</h1>
      <SignUp/>
      <p>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
    </div>
  )
}

export default RegisterPage;
