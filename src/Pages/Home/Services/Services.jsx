import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `services.json`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className=" w-full lg:w-96">
        <div className="  text-center mb-3 ">
          <h3 className=" text-xl text-[#FF3811]">Service</h3>
          <h1 className="text-3xl mb-2">Our Services</h1>
          <p className=" w-full md:w-1/3 text-center mx-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6  ">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>

      <Link
        to="#"
        className=" flex items-center justify-center text-[#FF3811] font-bold cursor-pointer gap-1 my-8 "
      >
        More Service
        <span className="mt-1">
          <FaArrowRight />
        </span>
      </Link>
    </>
  );
};

export default Services;
