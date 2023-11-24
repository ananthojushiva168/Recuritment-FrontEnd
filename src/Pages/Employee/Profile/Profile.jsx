import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import bannerimage from "../../../../src/Assets/Mask Group 1.png";
import Profileform from "./Profileform/Profileform";
import Topform from "./Topform/Topform";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import CpPop from "./CpPop";
import axios from "axios";

const Editprofile = () => {
  const userToken = JSON.parse(localStorage.getItem("user"));
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer {token}`,
    },
  };
  console.log(token);

  // const [openModal, setOpenModal] = useState(false);

  // const openPop = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.patch(
  //       `${process.env.REACT_APP_API_URL}/employee/changepass`,
  //       config
  //     );
  //     setOpenModal(!openModal);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <div className="profile-alignment">
        <div>
          <Navbar index="8" />
        </div>
        <div className="main-container-editprofile">
          <div className="banner-image-container">
            <img src={bannerimage} alt="nobannerimage" />
          </div>

          {/* middle content */}
          <div className="all-forms-sizing">
            <div>
              <Topform />
              <Profileform />
            </div>
            <div className="hr-sizing">
              <hr />
            </div>
            <div className="changepassword-section">
              <div className="changepassword-child-section">
                <h2>Account settings</h2>
                <div>
                  <button className="button-styleing">
                    <Link to="/employee/change-password">Change Password</Link>
                  </button>
                </div>
                <div className="button-delete">
                  <button className="button-styleing">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Editprofile;
