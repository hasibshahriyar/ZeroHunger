import { Navigate } from "react-router-dom";

import Loader from "../Components/Loader/Loader";
import useRole from "../hooks/useRole";

const UserRouter = ({ children }) => {
  const [role, loading] = useRole();
  if (loading) {
    return <Loader></Loader>;
  }
  if (role === "admin") {
    return <Navigate to={"/dashboard/admin-profile"}></Navigate>;
  }

  return children;
};

export default UserRouter;
