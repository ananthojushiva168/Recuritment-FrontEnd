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
    const response = await axios.patch(
      "http://localhost:8080/api/v1/employee/resend",
      token,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    // console.log(token);
    // fetch(
    //   `${process.env.REACT_APP_API_URL}/employer/resend`,
    //   {
    //     method: "PATCH",
  };

  return { getResendOtp };
};
