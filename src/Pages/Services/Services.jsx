import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import { useLoaderData } from "react-router-dom";


const Services = () => {
 
  const [services, setServices] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(3)
  const [currentPage, setCurrentPage]=useState(0)
  const  totalCounts  = useLoaderData()
  const { count } = totalCounts; 
  const itemsPerPage = itemPerPage; 
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()]
  console.log(pages);

  const handleItemPerPage = (e) => {
    const vel = parseInt(e.target.value); 
    setItemPerPage(vel)
    setCurrentPage(0)
  }
  

  
  

  // Fetch services from API
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-6 lg:gap-3 bg-[#e5e7eb] mb-2 p-3 rounded-md">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className="w-full mx-auto text-center mb-3">
        <p>{ currentPage}</p>
        {
          pages.map(page => <button
            // className={`${currentPage===page+1 && 'selected'}`}
            className={`mx-1 px-3 py-1 border rounded ${
            currentPage === page
              ? "bg-[#ff3811] text-white" 
              : "bg-white text-gray-700" 
          }`}
            onClick={()=>setCurrentPage(page)}
            key={page}>{page}
          </button>)          
        }
        <select className="border-2 " value={itemPerPage} onChange={handleItemPerPage}>         
          <option value="3">3</option>
          <option value="6">6</option>
          
        </select>
      </div>
    </>
  );
};

export default Services;
