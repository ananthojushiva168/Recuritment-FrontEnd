import React, { useState } from "react";

// SCSS
import "./signupForm.scss";
import {Link} from "react-router-dom";

// IMPORTING DIFFERENT COMPONENTS
import { useSignup } from "../../../../../Hooks/useSignup";
import OTPpage from "../Otp/OtpPage";

const SignupForm = () => {
  const [openModal, setOpenModal] = useState( false );

  const { signup } = useSignup();

  const [formErrors, setFormErrors] = useState( {} );

  const [register, setRegister] = useState( {
    full_name: "",
    email: "",
    password: "",
    refferredBy: ""
  } );

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setRegister( { ...register, [name]: value } );
  };

  const handleSubmit = async ( e ) => {
    e.preventDefault();
    const errors = validate( register );
    setFormErrors( errors );
    if ( Object.keys( errors ).length === 0 ) {
      await signup( register ).then( () => {
        setOpenModal( !openModal );
      } );
    }
    setRegister( {
      full_name: "",
      email: "",
      password: "",
      refferredBy: ""
    } );
  };

  const validate = ( values ) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if ( !values.full_name ) {
      errors.full_name = "Please enter your name";
    } else if ( values.full_name.length < 3 ) {
      errors.full_name = "Name is too short";
    }

    if ( !values.email ) {
      errors.email = "Email is required";
    } else if ( !regex.test( values.email ) ) {
      errors.email = "Invalid Email";
    }

    if ( !values.password ) {
      errors.password = "Password is required";
    } else if ( values.password.length < 4 ) {
      errors.password = "Password too short";
    }

    return errors;
  };

  return (
    <div>
      <div className="signup-form">
        <h1>Create an Account</h1>
        <p>
          Already have an account?<Link to="/employee-login"> Sign in.</Link>
        </p>


        <form>
          <input
            type="text"
            name="full_name"
            value={register.full_name}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <p className="error-msg">{formErrors.full_name}</p>

          <input
            type="text"
            name="email"
            value={register.email}
            placeholder="email"
            onChange={handleChange}
            required
          />
          <p className="error-msg">{formErrors.email}</p>

          <input
            type="text"
            name="password"
            value={register.password}
            placeholder="password"
            onChange={handleChange}
            required
          />
          <p className="error-msg">{formErrors.password}</p>
          <input
            type="text"
            name="refferredBy"
            value={register.refferredBy}
            placeholder="Referral id"
            onChange={handleChange}
            required
          />
          <p className="error-msg">{formErrors.referral_id}</p>


          <input
            className="raj"
            type="button"
            value="Send OTP"
            onClick={handleSubmit}
          />
          {openModal && <OTPpage />}
        </form>
      </div>
    </div>
  );
};
export default SignupForm;
