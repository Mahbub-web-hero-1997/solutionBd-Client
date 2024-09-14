import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { title, description, img, facility, _id } = serviceDetails;

  return (
    <>
      <div className=" bg-base-100 shadow-xl p-3 mb-3">
        <div className="card lg:card-side">
          <figure className="w-1/2">
            <img src={img} alt="" />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-start">
              <Link
                to={`/checkout/${_id}`}
                className="btn lg:text-lg lg:px-8 bottom-1 border-[#FF3811] text-[#FF3811]"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-start text-xl md:text-2xl font-bold text-[#FF3811] ">
          facility under this service
        </h1>
        <hr className="w-full md:w-1/4 mt-1 border-[#FF3811] shadow-lg mb-5" />
        <div className="collapse collapse-arrow border-b-[1px] border-[#FF3811] ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {facility[0].name}
          </div>
          <div className="collapse-content">
            <p>{facility[0].details}</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-b-[1px] border-[#FF3811] ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {facility[1].name}
          </div>
          <div className="collapse-content">
            <p>{facility[1].details}</p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-b-[1px] border-[#FF3811] ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            {facility[2].name}
          </div>
          <div className="collapse-content">
            <p>{facility[2].details}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
