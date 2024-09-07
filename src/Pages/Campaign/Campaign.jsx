import React from "react";
import { SwiperSlide } from "swiper/react";

const Campaign = ({ campaign }) => {
  const { img_url, day, hour, minute, second } = campaign;
  return (
    <SwiperSlide className="bg-white p-2 rounded-md">
      <div className=" flex flex-row gap-2 w-full h-full">
        <div className="w-1/3 h-full rounded-md">
          <img src={img_url} alt="" className="w-full h-full " />
        </div>
        <div className="w-2/3 h-full rounded-md grid grid-cols-2 gap-3">
          <div className="bg-gray-600 rounded-md flex justify-center items-center">
            <h1 className="text-2xl text-white font-bold text-center">{day}</h1>
          </div>
          <div className="bg-gray-600 rounded-md flex justify-center items-center">
            <h1 className="text-2xl text-white font-bold text-center">
              {hour}
            </h1>
          </div>
          <div className="bg-gray-600 rounded-md flex justify-center items-center">
            <h1 className="text-2xl text-white font-bold text-center">
              {minute}
            </h1>
          </div>
          <div className="bg-gray-600 rounded-md flex justify-center items-center">
            <h1 className="text-2xl text-white font-bold text-center">
              {second}
            </h1>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default Campaign;
