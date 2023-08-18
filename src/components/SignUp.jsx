import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Form } from './Form';
import { setUser } from '../store/slices/userSlice';


const SignUp = () => {
    const dispatch = useDispatch();
    const {push} = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/')
            })
            .catch(console.error)
    }

    return (
      <Form
          title='Log in'
          handleClick={handleRegister}
      />
    )
}

export default SignUp
