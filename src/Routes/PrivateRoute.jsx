import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <progress className="progress block w-56 mx-auto md:mt-52"></progress>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      (<Navigate state={{ from: location }} to="/login" replace />), loader
    );
  }
};

export default PrivateRoute;
