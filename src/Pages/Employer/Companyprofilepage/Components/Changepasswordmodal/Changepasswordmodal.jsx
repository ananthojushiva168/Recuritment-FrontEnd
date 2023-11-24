import { useState } from "react";

// SCSS
import "./Changepasswordmodal.scss";

// IMPORTING DEPENDECIS
import { Formik } from "formik";

// IMPORTING DIFFERENT COMPONENTS
import Thankyoumodal from "../Thankyoumodal/Thankyoumodal";

const initialValues = {
  oldpassword: "",
  newpassword: "",
  confirmpassword: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.oldpassword) {
    errors.oldpassword = "OldPassword is required";
  }
  if (!values.newpassword) {
    errors.newpassword = " Newpassword is required";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "Confirmpassword is required";
  }
  if (values.newpassword !== values.confirmpassword) {
    errors.confirmpassword = "both has to be same";
  }

  return errors;
};
const submitForm = (values, { resetForm }) => {
  console.log(values);
  resetForm({ values: "" });
};

const Changepasswordmodal = ({ open, onclose }) => {
  const [thankyoumodal, setthankyoumodal] = useState(false);
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
            <div className="otp-modal-popups2">
              <div>
                <h3 className="otp-content2">Change Password</h3>
              </div>
              <form onSubmit={handleSubmit}>
                {/* oldpassword */}

                <div className="otp-input">
                  <input
                    type="text"
                    name="oldpassword"
                    id="oldpassword"
                    value={values.oldpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Oldpassword"}
                    className={
                      errors.oldpassword && touched.oldpassword
                        ? "input-error"
                        : null
                    }
                  />
                </div>
                {errors.oldpassword && touched.oldpassword && (
                  <span className="error">{errors.oldpassword}</span>
                )}

                {/* newpassowrd */}

                <div className="otp-input">
                  <input
                    type="text"
                    name="newpassword"
                    id="newpassword"
                    value={values.newpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Newpassword"}
                    className={
                      errors.newpassword && touched.newpassword
                        ? "input-error"
                        : null
                    }
                  />
                </div>
                {errors.newpassword && touched.newpassword && (
                  <span className="error">{errors.newpassword}</span>
                )}

                {/* confirmpassword */}
                <div className="otp-input">
                  <input
                    type="text"
                    name="confirmpassword"
                    id="confirmpassword"
                    value={values.confirmpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Confirmpassword"}
                    className={
                      errors.confirmpassword && touched.confirmpassword
                        ? "input-error"
                        : null
                    }
                  />
                </div>
                {errors.confirmpassword && touched.confirmpassword && (
                  <span className="error">{errors.confirmpassword}</span>
                )}

                <div className="otp-submit-button-style">
                  <button
                    type="submit"
                    onClick={() => setthankyoumodal(true)}
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
      <Thankyoumodal
        open={thankyoumodal}
        onclose={() => setthankyoumodal(false)}
      />
    </div>
  );
};

export default Changepasswordmodal;
