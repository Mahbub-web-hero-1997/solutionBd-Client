const Service = ({ service }) => {
  const { title, description } = service;

  return (
    <div className="w-full md:w-[350px] h-[250px] max-h-[250px] border-2 bg-gray-400 rounded-md">
      <h1>{title}</h1>
      <p title={description}>{description.slice(0, 150)}</p>
    </div>
  );
};

export default Service;
