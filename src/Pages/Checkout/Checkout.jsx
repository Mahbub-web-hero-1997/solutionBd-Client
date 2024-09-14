import { useLoaderData } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const checkoutData = useLoaderData();
  const { price, title } = checkoutData;
  return (
    <div className=" Login_Form_Container container lg:w-1/2  pb-10 mb-5 mx-auto p-5">
      <h1 className="text-xl font-semibold text-[#FF3811] mb-4">
        Please Fill-up the below form with correct information!
      </h1>

      <form action="" className="">
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <input
            className="w-full md:w-1/2 p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="title"
            id=""
            value={title}
            readOnly
          />
          <input
            className="w-full  md:w-1/2 p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="number"
            name="price"
            id=""
            value={price}
            readOnly
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <input
            className="w-full md:w-1/2 p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="firstName"
            id=""
            placeholder="Enter Your First Name"
          />
          <input
            className="w-full  md:w-1/2 p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="lastName"
            id=""
            placeholder="Enter Your last name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <input
            className="w-full md:w-1/2 p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="email"
            name="email"
            id=""
            placeholder="example@gmail.com"
          />
          <input
            className="w-full  md:w-1/2 p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="number"
            name="phoneNumber"
            id=""
            placeholder="+880"
          />
        </div>
        <input
          className="w-full mb-3 p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
          type="text area"
          name="Address"
          id=""
          placeholder="Your address"
        
        />

        <input
          type="submit"
          value="Order-Confirm"
          className="w-full bg-[#FF3811] p-3 text-white font-semibold text-xl cursor-pointer rounded-sm"
        />
      </form>
    </div>
  );
};

export default Checkout;
