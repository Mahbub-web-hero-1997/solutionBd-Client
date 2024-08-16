import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Booking from './Booking';

const Bookings = () => {
    const bookings=useLoaderData()
    return (
    <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead className='bg-slate-500 text-white p-2'>
      <tr>
        <th></th>
        <th>Customer Name</th>
        <th>Customer Email</th>
        <th>Customer Address</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>     
                    {
                        bookings.map(booking => <Booking
                            key={booking._id}
                            booking={booking}
                        />)
      }
    </tbody>    
  </table>
</div>
    );
};

export default Bookings;