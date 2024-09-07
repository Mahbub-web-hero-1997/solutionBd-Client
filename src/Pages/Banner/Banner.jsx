import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Campaigns from "../Campaign/Campaigns";

const Banner = () => {
  const [carousels, setCarousels] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/carousels")
      .then((res) => res.json())
      .then((data) => setCarousels(data));
  }, []);
  return (
    <div className="my-5 flex flex-col md:flex-row gap-4 ">
      <Swiper
        className="w-full md:w-[850px] h-[230px] md:h-[400px] rounded-lg bg-gray-200 "
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        slidesPerView={1}
        speed={2000}
      >
        {carousels &&
          carousels.map((carousel) => (
            <SwiperSlide key={carousel._id} className=" w-full md:w-[800px]">
              <div className="hero h-[200px] md:h-[300px]  ">
                <div className="hero-content flex-row justify-normal md:gap-x-10  ">
                  <div className="w-[60%] md:w-[50%] ">
                    <img
                      className="w-full rounded-md h-[150px] md:h-full"
                      src={carousel.img_url}
                    />
                    <button className="btn mt-2 w-full font-bold md:hidden bg-[#FF3811] text-white hover:text-[#FF3811]  ">
                      Book-Now
                    </button>
                  </div>
                  <div className="w-[55%] h-[190px] m-0">
                    <h1 className="text-md md:text-3xl w-full font-semibold">
                      {carousel.title}
                    </h1>
                    <p className="mt-1 text-sm md:text-xl text-start">
                      {carousel.discription}
                    </p>
                    <button className="btn mt-2 w-full md:w-[50%] hidden md:block bg-[#FF3811] text-white hover:text-[#FF3811] font-bold">
                      Book-Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="w-full md:w-[350px] h-[400px] bg-gray-200 rounded-lg p-2 -z-50">
        <h1 className="text-xl font-semibold mb-2 w-full ">
          Upcoming Campaigns
        </h1>
        <hr className=" w-2/3 mb-3 border-1 border-[#FF3811] " />
        <Campaigns />
      </div>
    </div>
  );
};

export default Banner;
