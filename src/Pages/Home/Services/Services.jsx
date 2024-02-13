import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `services.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-3">
        <h3 className=" text-xl text-[#FF3811]">Service</h3>
        <h1 className="text-3xl mb-2">Our Services</h1>
        <p className="w-full md:w-1/3 text-center mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;
