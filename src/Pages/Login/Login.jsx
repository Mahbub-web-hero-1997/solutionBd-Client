import { useContext } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import GoogleLogin from "../Shared/GoogleLogin";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from;
  console.log(from);

  const handleLogin = (event) => {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password);
    navigate(from, { replace: true });
    event.preventDefault();
  };
  return (
    <>
      <div className=" Login_Form_Container container lg:w-1/2  pb-10 mb-5 mx-auto p-5">
        <h1 className="text-2xl font-semibold text-[#FF3811] mb-4">
          Please Login.
        </h1>

        <form
          onSubmit={handleLogin}
          action=""
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="email"
            placeholder="Enter Your Email"
          />
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <input
            type="submit"
            value="Login"
            className="w-full bg-[#FF3811] p-3 text-white font-semibold text-xl cursor-pointer rounded-sm"
          />
        </form>
        <div className="flex w-full mt-3 ">
          <hr className="border-1 w-1/2" />
          <span className="text-sm">Or</span>
          <hr className="border-1 w-1/2" />
        </div>
        <GoogleLogin />
      </div>
    </>
  );
};

export default Login;
