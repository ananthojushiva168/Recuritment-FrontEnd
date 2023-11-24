//scss
import "./registerEmployer.scss"

// IMAGES
import SignupImg from "../../../Assets/signup-img.png";

// IMPORTING DIFFERENT COMPONENTS
import EmployerSignupForm from "./Components/SignupForm/EmployerSignupForm";
import Navbar from "./../../../Components/Navbar/Navbar";
import Footer from "./../../../Components/Footer/Footer";

const RegisterEmployer = () => {
  return (
    <>
      <div className="signup-alignment">
        <div>
          <Navbar index="2" />
        </div>
        <div className="content">
          <img src={SignupImg} alt="" />
          <EmployerSignupForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RegisterEmployer;
