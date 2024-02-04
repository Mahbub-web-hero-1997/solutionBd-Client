import banner from "../../assets/banner/1.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="carousel w-full lg:w[840px] h-[350px] lg:h-[600px] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img src={banner} className="w-full rounded-xl " />

          <div className="absolute flex flex-col justify-center left-0 top-0 h-full  items-center w-full bg-gradient-to-r from-[#0e0d0d] to-[rgba(21,21,21,0)]  p-1">
            <h2 className="text-4xl font-bold lg:text-6xl text-white text-center mt-4 mb-2">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg w-full lg:w-11/12 text-white text-center mb-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="mb-20 ">
              <Link
                className="btn  focus:text-white focus:bg-[#FF3811] me-2"
                to="#"
              >
                Discover More
              </Link>
              <Link className="btn focus:text-white focus:bg-[#FF3811]" to="#">
                Latest Project
              </Link>
            </div>
          </div>

          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between lg:justify-end  ">
            <a
              href="#slide4"
              className="btn btn-circle  focus:bg-[#FF3811] focus:text-white me-4 "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle focus:bg-[#FF3811] focus:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* Slide-2 */}
        <div id="slide2" className="carousel-item relative w-full  ">
          <img src={banner} className="w-full rounded-xl " />

          <div className="absolute flex flex-col justify-center left-0 top-0 h-full  items-center w-full bg-gradient-to-r from-[#0e0d0d] to-[rgba(21,21,21,0)]  p-1">
            <h2 className="text-4xl font-bold lg:text-6xl text-white text-center mt-4 mb-2">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg w-full lg:w-11/12 text-white text-center mb-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="mb-20 ">
              <Link
                className="btn  focus:text-white focus:bg-[#FF3811] me-2"
                to="#"
              >
                Discover More
              </Link>
              <Link className="btn focus:text-white focus:bg-[#FF3811]" to="#">
                Latest Project
              </Link>
            </div>
          </div>

          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between lg:justify-end  ">
            <a
              href="#slide1"
              className="btn btn-circle  focus:bg-[#FF3811] focus:text-white me-4 "
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle focus:bg-[#FF3811] focus:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* Slide-3 */}
        <div id="slide3" className="carousel-item relative w-full  ">
          <img src={banner} className="w-full rounded-xl " />

          <div className="absolute flex flex-col justify-center left-0 top-0 h-full  items-center w-full bg-gradient-to-r from-[#0e0d0d] to-[rgba(21,21,21,0)]  p-1">
            <h2 className="text-4xl font-bold lg:text-6xl text-white text-center mt-4 mb-2">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg w-full lg:w-11/12 text-white text-center mb-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="mb-20 ">
              <Link
                className="btn  focus:text-white focus:bg-[#FF3811] me-2"
                to="#"
              >
                Discover More
              </Link>
              <Link className="btn focus:text-white focus:bg-[#FF3811]" to="#">
                Latest Project
              </Link>
            </div>
          </div>

          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between lg:justify-end  ">
            <a
              href="#slide2"
              className="btn btn-circle  focus:bg-[#FF3811] focus:text-white me-4 "
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle focus:bg-[#FF3811] focus:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        {/* Slide-4 */}
        <div id="slide4" className="carousel-item relative w-full  ">
          <img src={banner} className="w-full rounded-xl " />

          <div className="absolute flex flex-col justify-center left-0 top-0 h-full  items-center w-full bg-gradient-to-r from-[#0e0d0d] to-[rgba(21,21,21,0)]  p-1">
            <h2 className="text-4xl font-bold lg:text-6xl text-white text-center mt-4 mb-2">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-lg w-full lg:w-11/12 text-white text-center mb-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="mb-20 ">
              <Link
                className="btn  focus:text-white focus:bg-[#FF3811] me-2"
                to="#"
              >
                Discover More
              </Link>
              <Link className="btn focus:text-white focus:bg-[#FF3811]" to="#">
                Latest Project
              </Link>
            </div>
          </div>

          <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-between lg:justify-end  ">
            <a
              href="#slide3"
              className="btn btn-circle  focus:bg-[#FF3811] focus:text-white me-4 "
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle focus:bg-[#FF3811] focus:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
