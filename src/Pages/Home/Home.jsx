import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Address from "./Address/Address";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
   const handleServiceDetail = (id) => {
    console.log(id);
  };
  return (
    <div>
      <Banner />
      <div className="bg-[#e5e7eb] mb-5 p-3 rounded-md ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-6 lg:gap-3">
        {services.slice(0,3).map((service) => (
        <div key={service._id} className="w-full md:w-[350px] h-[300px]  bg-[#FFFFFF] rounded-md hover:shadow-xl hover:shadow-silver mx-auto p-2 ">
      <h1 className="text-xl font-semibold m-0">{service.title}</h1>
      <img src={service.img} alt="" className="rounded-md w-full h-3/4" />
      <div className=" flex justify-between items-center mt-2">
        <b className="text-[#FF3811]">${service.price}</b>
        <Link to={`/serviceDetails/${service._id}`}>
          <FaArrowRight
            onClick={() => handleServiceDetail(service._id)}
            className="cursor-pointer hover:text-[#FF3811] text-xl"
          />
        </Link>
      </div>
    </div>
        ))}
      </div>
        <Link className=" flex justify-center md:justify-between items-center w-1/2 md:w-[120px] mx-auto mt-3 font-semibold cursor-pointer hover:text-[#FF3811] text-xl" to="/services">  Load More<FaArrowRight className="cursor-pointer mt-1 hover:text-[#FF3811] text-xl"/></Link>
    </div>
      <Address />
    </div>
  );
};

export default Home;
