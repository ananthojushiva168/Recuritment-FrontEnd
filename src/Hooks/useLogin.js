import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setError(null);
    // let user = JSON.parse(localStorage.getItem("user"));
    // const token = user.token;
    // console.log(token)
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}/employee/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("user", JSON.stringify(data.data));
      dispatch({ type: "LOGIN", payload: data.data });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return { login, error };
};
