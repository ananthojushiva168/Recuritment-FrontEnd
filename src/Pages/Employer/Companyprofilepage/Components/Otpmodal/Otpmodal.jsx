import { useState } from "react";

//SCSS
import "./Otpmodal.scss";

//IMPORTING DEPENDECIS
import { Formik } from "formik";

//IMPORTING DIFFERENT COMPONENTS
import Changepasswordmodal from "../Changepasswordmodal/Changepasswordmodal";

const initialValues = {
  otp: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.otp) {
    errors.otp = "Otp is required";
  } else if (values.otp.length < 6) {
    errors.otp = "Otp is not correct";
  }
  return errors;
};
const submitForm = (values, { resetForm }) => {
  console.log(values);
  resetForm({ values: "" });
};
const Otpmodal = ({ open, onclose }) => {
  const [changepasswordmodal, setchangepasswordmodal] = useState(false);

  if (!open) return null;

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <div className="otp-modal-popup1">
              <div>
                <h3 className="otp-content">
                  An OTP has been sent to your email.
                  <br />
                  <span> Please enter the OTP to proceed further.</span>
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="otp-input">
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"OTP"}
                    className={errors.otp && touched.otp ? "input-error" : null}
                  />
                </div>
                {errors.otp && touched.otp && (
                  <span className="error">{errors.otp}</span>
                )}
                <div className="otp-submit-button-style">
                  <button
                    type="submit"
                    onClick={() => setchangepasswordmodal(true)}
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Formik>

      <Changepasswordmodal
        open={changepasswordmodal}
        onclose={() => setchangepasswordmodal(false)}
      />
    </div>
  );
};

export default Otpmodal;
