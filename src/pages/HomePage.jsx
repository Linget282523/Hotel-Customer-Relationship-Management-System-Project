import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {useAuth} from '../hooks/use-auth';
import { RoomsTable } from '../components/RoomsTable';
import { removeUser } from '../store/slices/userSlice';


const HomePage = () => {
  const dispatch = useDispatch();

  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button
        onClick={() => dispatch(removeUser())}
      >Log out {email}</button>
      {/* <RoomsTable/> */}

    </div>
  ) : (
    <Navigate to='/login'/>
  )
}

export default HomePage
