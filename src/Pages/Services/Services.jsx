import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  // Fetch services from API
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-6 lg:gap-3 bg-[#e5e7eb] mb-5 p-3 rounded-md">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
