//SCSS
import "./ChangePassEmployer.scss";

// IMAGES
import ForgotPassIMG from "../../../Assets/forgotPass.png";

// IMPORTING DIFFERENT COMPONENTS
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import EmployerChangePassForm from "./Components/FPform/EmployerChangePassForm";

const ChangePassEmployer = () => {
  return (
    <>
      <div className="forgot-alignment">
        <div>
          <Navbar index="0" />
        </div>
        <div className="forgot-content">
          <img src={ForgotPassIMG} alt="" />
          <EmployerChangePassForm/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ChangePassEmployer;
