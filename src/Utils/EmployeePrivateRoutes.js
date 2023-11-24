// importing dependecis
import { Navigate, Outlet } from "react-router-dom";

const EmployeePrivateRoutes = () => {
  const user = localStorage.getItem("user");

  // return <Outlet/>

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/employee-login" />;
  }
};

export default EmployeePrivateRoutes;
