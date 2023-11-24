
// SCSS
import "./employerLogin.scss";

// IMAGES
import LoginImg from "../../../Assets/login.png";

// IMPORTING DIFFERENT COMPONENTS
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import EmployerLoginForm from "./Components/LoginForm/EmployerLoginForm";

const EmployerLogIn = () => {
  return (
    <>
      <div className="login-alignment">
        <div>
          <Navbar index="1" />
        </div>
        <div className="login-content">
          <img src={LoginImg} alt="" />
          <EmployerLoginForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default EmployerLogIn;
