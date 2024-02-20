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
      <div className=" w-full lg:w-96 mx-auto">
        <div className="text-center mb-5 ">
          <h3 className=" text-xl text-[#FF3811]">Service</h3>
          <h1 className="text-2xl text-center font-bold lg:text-3xl mb-2">
            Our Services
          </h1>
          <p className=" w-full text-center mx-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6  ">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className=" flex items-center justify-center">
        <Link
          to="#"
          className=" text-[#FF3811] font-bold flex items-center cursor-pointer gap-1 my-8 "
        >
          More Service
          <span className="mt-1">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Services;
