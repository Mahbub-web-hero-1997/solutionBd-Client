import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { title, img, _id, price } = service;

  const handleServiceDetail = (id) => {
    console.log(id);
  };

  return (
    <div className="w-full md:w-[350px] h-[300px]  bg-[#FFFFFF] rounded-md hover:shadow-xl hover:shadow-silver mx-auto p-2 ">
      <h1 className="text-xl font-semibold m-0">{title}</h1>
      <img src={img} alt="" className="rounded-md w-full h-3/4" />
      <div className=" flex justify-between items-center mt-2">
        <b className="text-[#FF3811]">${price}</b>
        <Link to={`/serviceDetails/${_id}`}>
          <FaArrowRight
            onClick={() => handleServiceDetail(_id)}
            className="cursor-pointer hover:text-[#FF3811] text-xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default Service;
