import React from 'react';
import GoogleLogin from '../Shared/GoogleLogin';

const Register = () => {
    return (
       <div className='Register_Form_Container container lg:w-1/2  my-10 mx-auto p-5'>
                <h1 className='text-2xl font-semibold text-[#FF3811]'>Please Register! </h1>
                 <form action="" className='flex flex-col items-center justify-center gap-5'>
                <div className='flex p-0 m-0 w-full gap-3'>                    
                <input className='w-full p-3 outline-none text-lg border-[#FF3811] border-b' type="text" name="firstName" id="" placeholder='Enter Your First Name' />
                <input className='w-full p-3 outline-none text-lg border-[#FF3811] border-b' type="text" name="lastName" id="" placeholder='Enter Your Last Name' />
                    </div>
                    <input className='w-full p-3 outline-none text-lg border-[#FF3811] border-b' type="password" name="password" id="" placeholder='Enter Your Password' />
                    <input type="submit" value="Register" className='w-full bg-[#FF3811] p-3 text-white font-semibold text-xl cursor-pointer rounded-sm' />
                </form>
                <div className='flex w-full mt-3 '>
                <hr className='border-1 w-1/2' />
                    <span className='text-sm'>Or</span>
                <hr className='border-1 w-1/2' />
                </div>
                <GoogleLogin/>
           </div>
    );
};

export default Register;