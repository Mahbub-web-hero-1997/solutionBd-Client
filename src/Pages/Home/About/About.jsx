import { Link } from "react-router-dom";
import about1 from "../../../assets/about/Rectangle4.png";
import about2 from "../../../assets/about/Rectangle5.png";
const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-auto my-5 lg:my-32">
        <div className="relative">
          <img src={about1} alt="" className="w-full" />
          <img
            src={about2}
            alt=""
            className="absolute w-1/2 bottom-0 right-0 lg:bottom-[-80px] lg:right-[-80px] opacity-80 lg:opacity-100 "
          />
        </div>
        <div className="lg:ml-32 ">
          <h4 className="text-xl text-[#FF3811] mt-1 text-center">About Us</h4>
          <hr className="w-2/6 mb-10 text-[#FF3811] mx-auto" />
          <h1>We are qualified & of experience in this field</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <Link
            to="#"
            className="btn  focus:text-white focus:bg-[#FF3811] me-2"
          >
            Get More Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
