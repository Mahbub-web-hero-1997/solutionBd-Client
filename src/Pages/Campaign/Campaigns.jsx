import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/campaign")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);
  return (
    <Swiper
      className="w-full  rounded-md px-2 h-[330px] z-0"
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={20}
      autoplay={{ delay: 3000 }}
      slidesPerView={2}
      speed={2000}
      direction="vertical"
    >
      {campaigns.map((campaign) => (
        <SwiperSlide className="bg-white p-2 rounded-md z-0" key={campaign._id}>
          <div className=" flex flex-row gap-2 w-full h-full">
            <div className="w-1/3 h-full rounded-md">
              <img
                src="https://i.ibb.co.com/YDNyQLZ/Rectangle5.png"
                alt=""
                className="w-full h-full "
              />
            </div>
            <div className="w-2/3 h-full rounded-md grid grid-cols-2 gap-3">
              <div className="bg-gray-600 rounded-md flex justify-center items-center">
                <h1 className="text-2xl text-white font-bold text-center">
                  {campaign.day}d
                </h1>
              </div>
              <div className="bg-gray-600 rounded-md flex justify-center items-center">
                <h1 className="text-2xl text-white font-bold text-center">
                  {campaign.hour}h
                </h1>
              </div>
              <div className="bg-gray-600 rounded-md flex justify-center items-center">
                <h1 className="text-2xl text-white font-bold text-center">
                  {campaign.minute}m
                </h1>
              </div>
              <div className="bg-gray-600 rounded-md flex justify-center items-center">
                <h1 className="text-2xl text-white font-bold text-center">
                  {campaign.second}s
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Campaigns;
