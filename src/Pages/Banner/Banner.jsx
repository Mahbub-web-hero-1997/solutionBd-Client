
// import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import { useEffect, useState } from "react";

const Banner = () => {
  const [carousels, setCarousels] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/carousels')
    .then(res => res.json())
  .then(data=>setCarousels(data))
  },[])
  // const carousels=useLoaderData()
  return (
    <>
      
      <div className="carousel w-full lg:w[840px] h-[350px] lg:h-[450px] rounded-xl">
        {
          carousels.map(carousel => (
            <Slider key={carousel._id} carousel={carousel}/>))
        }
      </div>
    </>
  );
};

export default Banner;
