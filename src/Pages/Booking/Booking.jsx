const Booking = ({ booking, handleDelete }) => {
  const { price, email, name, title, address, _id } = booking;
  // console.log(booking);

  return (
    <>
      <tr className="font-semibold">
        <th></th>
        <td>{name}</td>
        <td className="p-2">{email}</td>
        <td>{address}</td>
        <td>{title}</td>
        <td>${price}</td>
        <td className="bg-sky-600 text-white text-center font-bold ">
          <button className="cursor-pointer w-full">Update</button>
        </td>
        <td className=" font-semibold bg-red-600 text-center text-white m-0 p-0 ">
          <button
            onClick={() => handleDelete(_id)}
            className="cursor-pointer w-full btn btn-warning text-white rounded-none bg-[#FF3811] "
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default Booking;
