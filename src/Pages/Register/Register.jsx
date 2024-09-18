import { useContext } from "react";
import GoogleLogin from "../Shared/GoogleLogin";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const handleRegister = (event) => {
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    event.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(user);
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    } else if (user.email === email) {
      alert("Email already exists.");
      return;
    }
    signUp(email, password);
  };
  return (
    <div className="Register_Form_Container container lg:w-1/2 mx-auto pb-10 my-5">
      <h1 className="text-2xl font-semibold text-[#FF3811]">
        Please Register!{" "}
      </h1>
      <form
        onSubmit={handleRegister}
        action=""
        className="flex flex-col items-center justify-center gap-5"
      >
        <div className="flex p-0 m-0 w-full gap-3">
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="firstName"
            placeholder="Enter Your First Name"
            required="required"
          />
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            required="required"
          />
        </div>
        <input
          className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
          type="email"
          name="email"
          placeholder="Example@gmail.com"
          required="required"
        />
        <div className="flex p-0 m-0 w-full gap-3">
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required="required"
          />
          <input
            className="w-full p-3 pl-0 outline-none text-lg border-[#FF3811] border-b"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required="required"
          />
        </div>
        <input
          type="submit"
          value="Register"
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
  );
};

export default Register;
