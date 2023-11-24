import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./employerforgotform.scss";

function EmployerForgotForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState({
    email: "",
  });

  const [token, setToken] = useState(null);

  const [toggle, setToggle] = useState(false);

  const [fpass, setFpass] = useState({
    otp: "",
    newPassword: "",
    confPassword: "",
  });

  const [error, setError] = useState(null);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const emailChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/employer/forgetpass`,
        email
      );
      let otpToken = response.data;
      setToken(otpToken.token);
      setToggle(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const forgotChange = (e) => {
    const { name, value } = e.target;
    setFpass({ ...fpass, [name]: value });
  };
  const passwordSubmit = async (e) => {
    e.preventDefault();
    console.log(fpass);
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/employer/resetpass`,
        fpass,
        config
      );
      alert("password updated sucessfully");
      navigate("/employer-login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {toggle ? (
        <form onSubmit={passwordSubmit}>
          <div className="submitPassword">
            <h1>Forgot Password</h1>
            <input
              type="text"
              name="otp"
              placeholder="otp"
              value={fpass.otp}
              onChange={forgotChange}
            />
            <input
              type="text"
              name="newPassword"
              placeholder="newPassword"
              value={fpass.newPassword}
              onChange={forgotChange}
            />
            <input
              type="text"
              name="confPassword"
              placeholder="confPassword"
              value={fpass.confPassword}
              onChange={forgotChange}
            />
            <span>Note:- password must be 8 characteristics</span>

            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="submitEmail">
            <h1>Forgot Password</h1>
            <input
              type="email"
              name="email"
              value={email.email}
              onChange={emailChange}
              placeholder="Email"
            />
            <button type="submit">Send Otp</button>
            {error && <p>{error}</p>}
          </div>
        </form>
      )}
    </>
  );
}

export default EmployerForgotForm;
