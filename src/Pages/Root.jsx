import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

const Root = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
