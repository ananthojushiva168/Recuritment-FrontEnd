// SCSS
import "./employeeLogin.scss";

// IMAGES
import LoginImg from "../../../Assets/login.png";

// IMPORTING DIFFERENT COMPONENTS
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import LoginForm from "./Components/LoginForm/LoginForm";

const EmployeeLogIn = () => {
  return (
    <>
      <div className="login-alignment">
        <div>
          <Navbar index="5" />
        </div>
        <div className="login-content">
          <img src={LoginImg} alt="" />
          <LoginForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default EmployeeLogIn;
