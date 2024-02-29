import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOutData = useLoaderData();
    const { title, price } = checkOutData;
  
    return (
        <>
         <div className='min-h-screen'>
                <div className='mx-auto text-center '>
                    <h1 className='text-3xl font-bold text-[#FF3811]'>{title}</h1>
                    <h1 className='text-[#FF3811] my-4'>Price${price}</h1>
                </div>     
                <form className='w-full md:w-1/2 border border-2 mx-auto p-2 rounded-lg' action="">
                    <div className='flex justify-between gap-2'>
                        <input className='mx-auto p-2 rounded-lg w-1/2 border-2 ' type="text" placeholder='First name' />                       
                        <input className='mx-auto p-2 rounded-lg w-1/2 border-2' type="text" placeholder='Last name' />                       
                    </div>
                    <input className='p-2 rounded-lg w-full border-2 my-2' type="email" placeholder='example@gmail.com' />         
                    <input className='p-2 rounded-lg w-full border-2 my-2' type="text" placeholder='Type your address here' />         
                    <Link to="/services" className="btn w-full lg:text-lg lg:px-8 bottom-1 border-[#FF3811] text-[#FF3811]">
          Book-Now
        </Link>
                   
                </form>
        </div>
        </>
    );
};

export default CheckOut;