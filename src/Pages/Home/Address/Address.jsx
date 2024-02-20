import { FaClock } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Address = () => {
  return (
    <div className=" grid grid-cols-1 mb-5 lg:mb-0 gap-x-4 md:grid-cols-3 w-full bg-black h-auto lg:h-52 p-5 rounded-lg">
      <div className=" flex items-center lg:justify-center text-white h-28 lg:h-auto">
        <span className="text-3xl text-[#FF3811]">
          <FaClock />
        </span>
        <div className="ml-3 text-center">
          <p>We are open monday-friday</p>
          <b className="text-xl">7:00 am - 9:00 pm</b>
        </div>
      </div>
      <div className=" flex mb-5 lg:mb-0  items-center lg:justify-center text-white h-28 lg:h-auto">
        <span className="text-3xl text-[#FF3811]">
          <FaPhoneSquareAlt />
        </span>
        <div className="ml-3 text-center">
          <p>Have a question?</p>
          <b className="text-xl">+2546 251 2658</b>
        </div>
      </div>
      <div className=" flex mb-5 lg:mb-0  items-center lg:justify-center text-white h-28 lg:h-auto">
        <span className="text-3xl text-[#FF3811]">
          <FaLocationDot />
        </span>
        <div className="ml-3 text-center">
          <p>Need a repair? our address</p>
          <b className="text-xl">Liza Street, New York</b>
        </div>
      </div>
    </div>
  );
};

export default Address;
