import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { title, price, img } = service;

  return (
    <div className="mx-auto">
      <div className="card  bg-base-100 shadow-xl h-96">
        <figure className="">
          <img src={img} alt="Shoes" className="w-full h-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <div className="card-actions justify-between items-center">
            <b className="text-[#FF3811]">Price: ${price}</b>
            <Link className="text-[#FF3811] focus:text-black" to="#">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object, // Example type, adjust as needed
};
export default Service;
