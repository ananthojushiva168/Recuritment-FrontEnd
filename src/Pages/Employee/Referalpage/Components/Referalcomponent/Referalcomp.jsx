import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// SCSS
import "./Referalcomp.scss";

// IMAGES
import protectionimage from "../../../../../Assets/protection.png";

// IMPORTING DEPENDECIS
import copy from "copy-to-clipboard";
import swal from "sweetalert";

const Referalcomp = () => {
  const [refID, setRefID] = useState("");

  const userToken = JSON.parse(localStorage.getItem("user"));
  const { token } = userToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getemplyeeData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/employee/getprofile`,
        config
      );
      setRefID(response.data.data.reff_id);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(refID)
  useEffect(() => {
    getemplyeeData();
  }, []);

// console.log(Ref)
  let uid = refID;
  // console.log(uid)
  // const [copyText, setCopyText] = useState( uid );
  // const handleCopyText = ( e ) => {
  //   setCopyText( e.target.value );
  // };

  const copyToClipboard = () => {
    copy( uid );
    swal( `You have copied "${uid}"` );
  };

  return (
    <div>
      <div className="refrealcomp">
        <div className="refrealcode-heading">
          <h3>REFERRAL CODE:</h3>
        </div>
        <div className="referral-code-text">
          <div>
            <input
              type="text"
              value={uid}
              // onChange={handleCopyText}
              readOnly
              placeholder="Enter the text you want to copy"
            />
          </div>
          <div>
            <button onClick={copyToClipboard} className="button-text">
              copy
            </button>
          </div>
        </div>
        <div className="imagestyle">
          <img src={protectionimage} alt="noprotectionimage" />
        </div>
      </div>
    </div>
  );
};

export default Referalcomp;
