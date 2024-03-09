import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { user } = useContext(AuthContext)
    
    const handleLogin = (event) => {
        const form = event.target;
        const name = form.first.value;
        console.log(name)
        event.preventDefault();
     
    
        
    }
    return (
        <>
        </>
    );
};

export default Login;