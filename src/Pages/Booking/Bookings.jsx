import Booking from "./Booking";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:5000/bookings?email=${user?.email}`;
      axios
        .get(url, { withCredentials: true })
        .then((res) => {
          setBookings(res.data);
        })
        .catch((err) => {
          console.error(err.message); // Log or handle the error
        });
    }
  }, [user?.email]); // Safeguarded dependency

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You Want to Delete this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });

      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

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
            <th className="p-3 text-md ">Update</th>
            <th className="p-3 text-md ">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <Booking
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
