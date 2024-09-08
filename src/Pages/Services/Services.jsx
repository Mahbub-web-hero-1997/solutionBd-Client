import { useEffect, useState } from "react";
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
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
