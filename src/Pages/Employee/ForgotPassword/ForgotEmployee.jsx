//SCSS
import "./forgotEmployee.scss";

// IMAGES
import ForgotPassIMG from "../../../Assets/forgotPass.png";

// IMPORTING DIFFERENT COMPONENTS
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ForgotForm from "./Components/FPform/ForgotForm";

const ForgotEmployee = () => {
  return (
    <>
      <div className="forgot-alignment">
        <div>
          <Navbar index="0" />
        </div>
        <div className="forgot-content">
          <img src={ForgotPassIMG} alt="" />
          <ForgotForm/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ForgotEmployee;
