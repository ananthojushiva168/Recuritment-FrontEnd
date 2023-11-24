// SCSS
import "./registerEmploye.scss";

// IMAGES
import SignupImg from "../../../Assets/signup-img.png";

// IMPORTING DIFFERENT COMPONENTS
import SignupForm from "./Components/SignupForm/SignupForm";
import Navbar from "./../../../Components/Navbar/Navbar";
import Footer from "./../../../Components/Footer/Footer";

const RegisterEmploye = () => {
  return (
    <>
      <div className="signup-alignment">
        <div>
          <Navbar index="2" />
        </div>
        <div className="content">
          <img src={SignupImg} alt="" />
          <SignupForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RegisterEmploye;
