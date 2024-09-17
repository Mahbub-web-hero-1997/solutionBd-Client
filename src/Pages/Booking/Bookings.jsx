import { useLoaderData } from "react-router-dom";
import Booking from "./Booking";

const Bookings = () => {
  const bookings = useLoaderData();
  return (
    <div className="overflow-x-auto my-4">
      <h1>Total Booking: {bookings.length}</h1>
      <table className="table table-xs">
        <thead className="bg-slate-500 text-white p-2">
          <tr>
            <th></th>
            <th className="p-3 text-md">Customer Name</th>
            <th className="p-3 text-md">Customer Email</th>
            <th className="p-3 text-md">Customer Address</th>
            <th className="p-3 text-md">Product Name</th>
            <th className="p-3 text-md">Product Price</th>
            <th className="p-3 text-md ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <Booking key={booking._id} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
