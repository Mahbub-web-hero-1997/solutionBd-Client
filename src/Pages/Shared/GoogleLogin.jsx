import React, { useContext } from 'react';
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import linkedIn from '../../assets/icons/LinkedIn.png'
import facebook from '../../assets/icons/facebook.png'
import { Link } from 'react-router-dom';


const GoogleLogin = () => {
   
    
    
    
    return (
        <div className='w-full p-3 flex items-center gap-8'>
            <div className=' w-1/2 flex items-center gap-8 border-r'>
            <Link className='text-sm'>
               <img className='w-9 border hover:shadow-xl hover:scale-110 hover:transition-all hover:translate-x-1 hover:translate-y-1' src={google} alt="" />
            </Link>         
            <Link className='text-sm' to="/login">
               <img className='w-9 hover:shadow-xl hover:scale-110 hover:transition-all hover:translate-x-1 hover:translate-y-1' src={github} alt="" />
            </Link>         
            <Link className='text-sm' to="/login">
               <img className='w-9 hover:shadow-xl hover:scale-110 hover:transition-all hover:translate-x-1 hover:translate-y-1' src={linkedIn} alt="" />
            </Link>   
            <Link className='text-sm' to="/login">
               <img className='w-9 hover:shadow-xl hover:scale-110 hover:transition-all hover:translate-x-1 hover:translate-y-1' src={facebook} alt="" />
            </Link>   
            </div>   
            <div>
                 <span>New user?<Link to='/register' className='text-blue-600'>Please Register!</Link></span>
                               
            </div>
        </div>
    );
};

export default GoogleLogin;