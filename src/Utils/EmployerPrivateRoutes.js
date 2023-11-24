import { Navigate, Outlet } from "react-router-dom";

const EmployerPrivateRoutes = () => {
   const user = localStorage.getItem( "user" );

   // return <Outlet/>

   if ( user ) {
      return <Outlet />;
   } else {
      return <Navigate to="/employer-login" />;
   }
};

export default EmployerPrivateRoutes;