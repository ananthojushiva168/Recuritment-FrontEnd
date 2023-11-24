import React from "react";
import { Routes, Route } from "react-router-dom";

//Importing Scroll to top file
import ScrollToTop from "./Utils/ScrollToTop";

//Importing Public Pages
import Home from "./Pages/Home/Home";
import Loading from "./Utils/Loading";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

//Importing Employee Pages
import RegisterEmploye from "./Pages/Employee/Signup/RegisterEmploye";
import EmployeeLogIn from "./Pages/Employee/Login/EmployeeLogIn";
import ForgotEmployee from "./Pages/Employee/ForgotPassword/ForgotEmployee";
import Referalpage from "./Pages/Employee/Referalpage/Referalpage";
import Subscriptionpage from "./Pages/Employee/Subscriptionpage/Subscriptionpage";
import ChangePassEmployee from "./Pages/Employee/ChangePassword/ChangePassEmployee";

//Employee Private Routes
import EmployeePrivateRoutes from "./Utils/EmployeePrivateRoutes";
import Profile from "./Pages/Employee/Profile/Profile";

//Importing Employer Pages
import Companyprofilepage from "./Pages/Employer/Companyprofilepage/Companyprofilepage";
import HireTalent from "./Pages/Employer/Hire/HireTalent";

//Employer Private Routes
import RegisterEmployer from "./Pages/Employer/Signup/RegisterEmployer";
import EmployerLogIn from "./Pages/Employer/Login/EmployerLogIn";
import ForgotEmployer from "./Pages/Employer/ForgotPassword/ForgotEmployer";
import EmployerPrivateRoutes from "./Utils/EmployerPrivateRoutes";

//Contexts
import ForgotFormContexProvider from "./Contex/ForgotFormContex";
import OtpPageContexProvider from "./Contex/OtpPageContex";
// Admindata
// import Adminsidebar from './Pages/Admin/Components/Adminsidebar/Adminsidebar';
import Adminpage from "./Pages/Admin/AdminDashboard/Adminpage";
import EmployeeAdmin from "./Pages/Admin/EmployeeDashboard/EmployeeAdmin";
import AllEmployer from "./Pages/Admin/EmployerDashboard/AllEmployer";
import Vemployee from "./Pages/Admin/verifyemployee/employee/Vemployee";
import Adminverifiedemployee from "./Pages/Admin/verifiedrequest/components/Adminverifiedemployee";
import Scheduled from "./Pages/Admin/Scheduled/Scheduled";
import ChangePassEmployer from "./Pages/Employer/ChangePassword/ChangePassEmployer";
import Filters from "./Pages/Employer/Fiilters/Filters";
import { Globalstore } from "./Contex/filterstore";
import FilterDeailedpage from "./Pages/Employer/Fiilters/FilterDeailedpage";

const About = React.lazy(() => import("./Pages/About/About"));
function App() {
  return (
    //this is u, this is me, this is all we need
    
    <ScrollToTop>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutus"
          element={
            <React.Suspense fallback={<Loading />}>
              <About />
            </React.Suspense>
          }
        />
        <Route path="*" element={<PageNotFound />} />

        {/* Employer Routes Public Routes*/}
        <Route
          path="employer-signup"
          element={
            <OtpPageContexProvider>
              <RegisterEmployer />
            </OtpPageContexProvider>
          }
        />
        <Route path="employer-login" element={<EmployerLogIn />} />
        <Route
          path="employer-forgot-password"
          element={
            <ForgotFormContexProvider>
              <ForgotEmployer />
            </ForgotFormContexProvider>
          }
        />

        {/* Employer Routes Private Routes*/}
        <Route path="/employer" element={<EmployerPrivateRoutes />}>
          <Route path="change-password" element={<ChangePassEmployer />} />
          <Route path="referal" element={<Referalpage />} />
          <Route path="myprofile" element={<Companyprofilepage />} />
          <Route path="wallet" element={<Subscriptionpage />} />
          <Route path="hire" element={<HireTalent />} />

          <Route
            path="filter"
            element={
              <Globalstore>
                <Filters />
              </Globalstore>
            }
          ></Route>

          <Route path="profile/:id" element={<FilterDeailedpage />}></Route>
        </Route>

        {/* Employee Routes public Routes*/}
        <Route
          path="employee-signup"
          element={
            <OtpPageContexProvider>
              <RegisterEmploye />
            </OtpPageContexProvider>
          }
        />
        <Route path="employee-login" element={<EmployeeLogIn />} />
        <Route
          path="employee-forgot-password"
          element={
            <ForgotFormContexProvider>
              <ForgotEmployee />
            </ForgotFormContexProvider>
          }
        />

        {/* Employee Routes Private Routes*/}
        <Route path="/employee" element={<EmployeePrivateRoutes />}>
          <Route path="profile" element={<Profile />} />
          <Route path="change-password" element={<ChangePassEmployee />} />
          <Route path="referal" element={<Referalpage />} />
        </Route>

        {/* admin Routes */}

        <Route path="/admin">
          <Route path="dashboard" element={<Adminpage />}></Route>
          <Route path="employee" element={<EmployeeAdmin />}></Route>
          <Route path="employer" element={<AllEmployer />}></Route>
          <Route path="request" element={<Adminverifiedemployee />}></Route>
          <Route path="verified-employee" element={<Vemployee />}></Route>
          {/* adminlogin */}
          <Route path="scheduled" element={<Scheduled />}></Route>
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
