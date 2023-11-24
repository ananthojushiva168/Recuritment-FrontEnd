import { useState, createContext } from "react";

export const ForgotFormContex = createContext();

const ForgotFormContexProvider = ({ children }) => {
  const [email, setEmail] = useState({
    Email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleOTP = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
    // console.log(otp)
  };

  const handlePass = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const consoleEmail = (e) => {
    e.preventDefault();
    console.log(email);
    // setEmai({Email:""})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail({
      Email: "",
      Otp: "",
      password: "",
      CNFpassword: "",
    });
  };

  const values = {
    email,
    handleChange,
    setEmail,
    handleOTP,
    handlePass,
    consoleEmail,
    handleSubmit,
  };

  return (
    <>
      <ForgotFormContex.Provider value={values}>
        {children}
      </ForgotFormContex.Provider>
    </>
  );
};

export default ForgotFormContexProvider;
