import React from 'react'
import "../Signup/Components/Otp/otppage.scss"

const CpPop = () => {
    
  return (
    <div className="Otp-Section">
    <div className="OtpPopup">
      <div className="otp-head-text">
        <h2>An OTP has been sent to your email</h2>
        <h2>
          Please enter the OTP to <br /> proceed further.
        </h2>
      </div>
      <div className="resend-textField">
        <form>
          <input
            type="text"
            name="otp"
            placeholder="otp"
          />
          <br />
        </form>
        <button className="submitButton">
          SUBMIT
        </button>
      </div>
    </div>
  </div>
  )
}

export default CpPop