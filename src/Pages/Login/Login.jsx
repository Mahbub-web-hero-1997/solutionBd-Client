import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider"; // Ensure this path is correct
import GoogleLogin from "../Shared/GoogleLogin"; // Ensure this component is defined and imported correctly
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const { signIn, setLoader } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Provide a default fallback for the 'from' location
  const from = location.state?.from || "/";

  // console.log(from); // Debug: logs the original page the user wanted to access

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const email = form.email.value.toLowerCase();
    const password = form.password.value;

    try {
      // Await the sign-in process to ensure it's completed before redirecting
      await signIn(email, password)
        .then((userCredential) => {
          // Logged in
          // console.log(userCredential.user);

          axios
            .post(
              "http://localhost:5000/jwt",
              { email },
              { withCredentials: true }
            )
            .then((res) => {
              if (res.data.success) {
                // Redirect to the original page after successful login
                navigate(from, { replace: true });
                setLoader(true);
              }
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoader(false); // Stop loader after login completes
        });

      // Navigate to the desired path after successful login

      // Optionally reset form fields (if needed)
      form.reset();
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally show an error message to the user here
    }
  };

  return (
    <div className="Login_Form_Container container lg:w-1/2 pb-10 mb-5 mx-auto p-5">
      <h1 className="text-2xl font-semibold text-[#FF3811] mb-4">
        Please Login.
      </h1>

      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center gap-5"
      >
        <input
          className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required // Optional: Add validation attributes
        />
        <input
          className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          required // Optional: Add validation attributes
        />
        <input
          type="submit"
          value="Login"
          className="w-full bg-[#FF3811] p-3 text-white font-semibold text-xl cursor-pointer rounded-sm"
        />
      </form>
      <div className="flex w-full mt-3">
        <hr className="border-1 w-1/2" />
        <span className="text-sm">Or</span>
        <hr className="border-1 w-1/2" />
      </div>
      <GoogleLogin />
    </div>
  );
};

export default Login;
