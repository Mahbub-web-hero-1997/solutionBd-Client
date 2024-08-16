
import { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import AuthProvider from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
    const checkOutData = useLoaderData();
    const { title, price, _id } = checkOutData;
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()
    const handleCheckout = (e) => { 
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const date = form.date.value;
        const address = form.address.value;
        const bookingInfo = {
            firstName, lastName, email, date, address,
            product_id: _id,
            product_title: title,
            price: price
        }
        // console.log(bookingInfo)
        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Booking successful')
                    navigate('/')
                    
                }
            
        })
        
    }
  
    return (
        <>
         <div className='min-h-screen'>
                <div className='mx-auto text-center '>
                    <h1 className='text-3xl font-bold text-[#FF3811]'>{title}</h1>
                    <h1 className='text-[#FF3811] my-4'>Price${price}</h1>
                </div>     
                <form onSubmit={handleCheckout} className='w-full md:w-1/2 border-2 mx-auto p-2 rounded-lg' action="">
                    <div className='flex justify-between gap-2'>
                        <input defaultValue={user?.displayName} className='mx-auto p-2 rounded-lg w-1/2 border-2 ' name='firstName' type="text" placeholder='First name' />                       
                        <input defaultValue={user?.lastName} className='mx-auto p-2 rounded-lg w-1/2 border-2' name='lastName' type="text" placeholder='Last name' />                       
                    </div>
                    <input className='p-2 rounded-lg w-full border-2 my-2' type="email" name='email' placeholder='example@gmail.com' defaultValue={user?.email} />         
                    <input className='p-2 rounded-lg w-full border-2 my-2' type="date" name='date' placeholder='example@gmail.com' />         
                    <input className='p-2 rounded-lg w-full border-2 my-2' type="text" name='address' placeholder='Type your address here' />         
                    {/* <Link to="/services" className="btn w-full lg:text-lg lg:px-8 bottom-1 border-[#FF3811] text-[#FF3811]">
          Book-Now
                    </Link> */}
                    <button className="btn w-full lg:text-lg lg:px-8 bottom-1 border-[#FF3811] text-[#FF3811]">Book-Now</button>
                   
                </form>
        </div>
        </>
    );
};

export default CheckOut;