// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import auth from '../../firebase.config';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    // const { user } = useContext(AuthContext)
    
    const handleLogin = (event) => {
        const form = event.target;
        const name = form.first.value;
        console.log(name)
        event.preventDefault();    
    
        
    }
    return (
        <>
           
            <div className=' Login_Form_Container w-11/12 lg:w-1/2  my-10 mx-auto p-5'>
                <h1 className='text-2xl font-semibold text-[#FF3811]'>Please Login To Continue</h1>
                 <form action="" className='flex flex-col items-center justify-center gap-5'>
                    <input className='w-full p-3 outline-none text-lg border-[#FF3811] border-b' type="text" name="email" id="" placeholder='Enter Your Email'  />
                    <input className='w-full p-3 outline-none text-lg border-[#FF3811] border-b' type="password" name="password" id="" placeholder='Enter Your Password' />
                    <input type="submit" value="Login" className='w-full bg-[#FF3811] p-3' />
            </form>
           </div>
        </>
    );
};

export default Login;