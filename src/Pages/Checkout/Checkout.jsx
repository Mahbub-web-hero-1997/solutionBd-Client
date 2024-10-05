import { useContext } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const checkoutData = useLoaderData();
  const { price, title } = checkoutData;
  const navigate = useNavigate();
  const handleCheckoutData = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const name = form.name.value;
    const address = form.address.value;

    // Optional: Basic validation (e.g., check for empty values)
    if (!title || !price || !email || !phone || !name || !address) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please fill in all the fields",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    fetch(
      "http://localhost:5000/bookings",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          email,
          phone,
          name,
          address,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/bookings");
          // Check if insertedId exists
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your booking has been Confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset(); // Reset the form if needed
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to save your booking",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    // Optional: Log the data (commented out)
    // console.log(`title: ${title}, price: ${price}, email: ${email}, phone:${phone}, name:${name}, address:${address}`);
  };

  return (
    <div className="Register_Form_Container container lg:w-1/2 mx-auto pb-10 my-5">
      <h1 className="text-2xl font-semibold text-[#FF3811]">
        Please Register!{" "}
      </h1>
      <form
        onSubmit={handleCheckoutData}
        action=""
        className="flex flex-col items-center justify-center gap-5"
      >
        <div className="flex p-0 m-0 w-full gap-3">
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="title"
            defaultValue={title}
            readOnly
          />
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="price"
            defaultValue={price}
          />
        </div>
        <div className="flex p-0 m-0 w-full gap-3">
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="name"
            defaultValue={user?.displayName}
          />
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="number"
            name="phone"
            defaultValue={user?.phone}
            placeholder="+8801"
          />
        </div>
        <input
          className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
          type="email"
          name="email"
          defaultValue={user?.email}
          readOnly
        />

        <textarea
          className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
          type="text"
          name="address"
          placeholder="Type Your Address"
        />

        <input
          type="submit"
          value="Booking-Confirm"
          className="w-full bg-[#FF3811] p-3 text-white font-semibold text-xl cursor-pointer rounded-sm"
        />
      </form>
    </div>
  );
};

export default Checkout;
