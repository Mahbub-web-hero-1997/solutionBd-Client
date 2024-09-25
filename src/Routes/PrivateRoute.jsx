import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return (
      <progress className="progress block w-56 mx-auto md:mt-52"></progress>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
