import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log({ location });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
