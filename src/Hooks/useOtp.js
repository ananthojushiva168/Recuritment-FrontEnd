import { useAuthContext } from "./useAuthContext";

export const useOtp = () => {
  const { dispatch } = useAuthContext();

  const getOtp = async (otp) => {
    let user = JSON.parse(localStorage.getItem("user"));
    const token = user.token ;
    console.log(token)
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/employee/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(otp),
      }
    );

    const data = await response.json();

    if (response.ok) {
      //save user to local storage
      localStorage.setItem("user", JSON.stringify(data));

      //update context
      dispatch({ type: "LOGIN", payload: data });
    }
  };

  return { getOtp };
};
