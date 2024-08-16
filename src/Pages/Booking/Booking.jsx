import React, { useState } from 'react';

const Booking = ({ booking }) => {

    const { price, email, firstName, lastName, product_title, address} = booking;
    
 
    
    return (
        <>
        <tr>
        <th></th>
        <td>{firstName}{ lastName}</td>
                <td>{email}</td>
                <td>{address }</td>
                <td>{ product_title}</td>
                <td>${ price}</td>
                <td className='bg-sky-400 text-sky-700 text-center text-bold'><button>Approved</button></td>
      </tr>
        </>
    );
};

export default Booking;