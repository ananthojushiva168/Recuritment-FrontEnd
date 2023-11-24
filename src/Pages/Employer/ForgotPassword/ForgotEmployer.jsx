import React from 'react'

//SCSS
import "./forgotEmployer.scss"

// IMAGES
import ForgotPassIMG from "../../../Assets/forgotPass.png";

// IMPORTING DIFFERENT COMPONENTS
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import EmployerForgotForm from "./Components/FPform/EmployerForgotForm";

const ForgotEmployer = () => {
  return (
    <>
      <div className="forgot-alignment">
        <div>
          <Navbar index="0" />
        </div>
        <div className="forgot-content">
          <img src={ForgotPassIMG} alt="" />
          <EmployerForgotForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ForgotEmployer
