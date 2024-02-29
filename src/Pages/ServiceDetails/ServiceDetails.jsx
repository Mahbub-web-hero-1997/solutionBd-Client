import React from 'react';
import {Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const {_id, title,img,description,price } = service;
    // console.log(title)
  

  
    
   
    return (
        <div className="mt-6 min-h-screen">
        <div className="hero-content flex-col lg:flex-row justify-start">
          <img src={img} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="my-4">{description}</p>
                    <p className='my-4 text-[#FF3811]'><b>Price:${ price}</b></p>
            <Link onClick={()=>checkOutClick(id)} to={`/checkout/${_id}`}
             className="btn lg:text-lg lg:px-8 bottom-1 bg-[#FF3811] text-white hover:text-black">CheckOut</Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;