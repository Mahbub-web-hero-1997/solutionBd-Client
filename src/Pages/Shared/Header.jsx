import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut, setLoader } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoader(false); // Stop loader after logout completes
      });
  };

  const navItems = (
    <>
      <li className="hover:text-[#FF3811]">
        <Link to="/services">Services</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/">Blog</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-[#FF3811] lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className=" hidden lg:flex flex-col items-center" to="/">
          <img src={logo} alt="" />
          <p className=" lg:mt-[-25px] text-xl font-bold spa">
            <span className=" text-3xl lg:text-6xl m-0 text-[#FF3811]">S</span>
            olution
            <span className=" text-2xl lg:text-3xl m-0 text-[#FF3811]">Bd</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center lg:hidden">
        <Link className="flex flex-col items-center" to="/">
          <img className="ml-[-1px] lg:ml-0" src={logo} alt="" />
          <p className=" mt-[-10px] lg:mt-[-25px] text-xl font-bold spa">
            <span className=" text-3xl lg:text-6xl m-0 text-[#FF3811]">S</span>
            olution
            <span className=" text-2xl lg:text-5xl m-0 text-[#FF3811]">Bd</span>
          </p>
        </Link>
      </div>
      <div className="navbar-end lg:w-[68%] ">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold hidden lg:flex">
          {navItems}
        </ul>
        {user?.email ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <Link to="/bookings">My-Bookings</Link>
                </li>
                <li>
                  <Link onClick={handleSignOut} to="/login">
                    LogOut
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="btn lg:text-lg lg:px-8 bottom-1 border-[#FF3811] text-[#FF3811]"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
