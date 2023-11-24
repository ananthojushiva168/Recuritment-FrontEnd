import { createContext } from "react";

export const UserContex = createContext();

const UserContexProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("user"));
  const {token} = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const userValues = {config,token,userToken}

  return (
    <>
      <UserContex.Provider value={userValues}>
        {children}
      </UserContex.Provider>
    </>
  );
};

export default UserContexProvider;
