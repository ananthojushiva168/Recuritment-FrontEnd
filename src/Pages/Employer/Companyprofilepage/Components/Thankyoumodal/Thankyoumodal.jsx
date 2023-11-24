import React from "react";

//SCSS
import "./Thankyoumodal.scss";

//ASSETS
import tickimage from "../../../../../Assets/correct.png";

const Thankyoumodal = ({ open, onlcose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal-popup-thankyou">
        <div>
          <h2 className="password-heading">Password successfully changed!</h2>
        </div>
        <div>
          <img src={tickimage} alt="nosuccessimage" />
        </div>
        <div>
          <p>Please log in again.</p>
        </div>
        <div className="login-button">
          <button>LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Thankyoumodal;
