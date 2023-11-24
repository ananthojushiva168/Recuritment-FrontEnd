import { useState, createContext } from "react";

export const OtpPageContex = createContext();


const OtpPageContexProvider = ({ children }) => {
    


    const [otp, setOtp] = useState({
      Otp:""
    })
  
    const handleOTP = (e) =>{
      const {name, value} = e.target;
      setOtp({...otp, [name]: value })
  
      consoleOtp()
  
    }
  
    const consoleOtp = () => {
      console.log(otp)
    //   setOtp({Otp:""})
    }
  


const otpValues = {
    otp,handleOTP,consoleOtp,setOtp
}
  return (
    <>
    <OtpPageContex.Provider value={otpValues}>
      {children}
    </OtpPageContex.Provider>
  </>
  )
}

export default OtpPageContexProvider