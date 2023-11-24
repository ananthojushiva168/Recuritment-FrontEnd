import { useState,useEffect } from "react";

//SCSS
import "./employerotppage.scss";

// IMPORTING DIFFERENT COMPONENTS
import { useOtp } from "../../../../../Hooks/Employer Hooks/useOtp";
import { useResendOtp } from "../../../../../Hooks/Employer Hooks/useResendOtp";

// IMPORTING DEPENDECIS
import { useNavigate } from "react-router-dom";

const EmployerOTPpage = () => {
  const navigate = useNavigate();
  const { getOtp } = useOtp();
  const {getResendOtp} = useResendOtp()

  const [otp, setOtp] = useState({
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp({ ...otp, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getOtp(otp);
    setOtp({
      otp: "",
    });
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user.data.email_verified) {
      navigate("/employer/hire");
    } else {
      alert("Wrong otp");
    }
  };

  useEffect( () => {
    document.addEventListener( "keydown", function ( event ) {
      if ( event.key === "Enter" ) {
        event.preventDefault();
        alert( "Please click the submit button!" )
      }
    } );
  }, [] )

  const handleResend = async (e) => {
    e.preventDefault();
    await getResendOtp(otp);
    setOtp({
      otp: "",
    });
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user.data.email_verified) {
      navigate("/employer/hire");
    } else {
      alert("Wrong otp");
    }
  };

  return (
    <div className="Otp-Section">
      <div className="OtpPopup">
        <div className="otp-head-text">
          {/* <span>Employer</span> <br/> */}
          <h2>An OTP has been sent to your email</h2>
          <h2>
            Please enter the OTP to <br /> proceed further.
          </h2>
        </div>
        <div className="resend-textField">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="otp"
              placeholder="otp"
              value={otp.otp}
              onChange={handleChange}
            />
            <br />
            <p className="resendotp" onClick={handleResend}>Resend Otp</p>
            <br/>
          </form>
          <button onClick={handleSubmit} className="submitButton">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployerOTPpage;
