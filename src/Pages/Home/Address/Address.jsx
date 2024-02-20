import { FaClock } from "react-icons/fa";
const Address = () => {
  return (
    <div className="w-full  bg-black">
      <div className=" bg-red-500 flex justify-between text-white text-center">
        <div className="w-full ">
          <FaClock />
          <div>
            <p>We are open monday-friday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
