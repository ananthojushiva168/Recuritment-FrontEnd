import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export const useResendOtp = () => {
  const { dispatch } = useAuthContext();
  


  const getResendOtp = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    console.log(token);
    const response = await axios.patch(
      "http://localhost:8080/api/v1/employer/resend",null,
      {headers:{
        Authorization: `Bearer ${user.token}`,
      }}
    );
    // fetch(
    //   `${process.env.REACT_APP_API_URL}/employer/resend`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "authorization": `Bearer ${token}`,
    //     },
    //     body: JSON.stringify(otp),
    //   }
    // );

    // const data = await response.json();

    // if (response.ok) {
    //   //save user to local storage
    //   localStorage.setItem("user", JSON.stringify(data));

    //   //update context
    //   dispatch({ type: "LOGIN", payload: data });
    // }
  };

  return { getResendOtp };
};
