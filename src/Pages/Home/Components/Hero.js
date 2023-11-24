import React from "react";
import "./Hero.scss";
import img from "../../../Assets/meeting.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
  <section className="herosec">
    <div className="hero">
      <div className="twoboxes">
        <div className="content">
          <h1>
            Hiring made easier!
          </h1>
          <p>Find verified, active<br /> candidates that are open to <br /> work.</p>
        </div>

        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="search">
        <div className="inputs">
          <input
            className="category"
            type="text"
            placeholder="Search Category"
          />
          <input
            className="location"
            type="text"
            placeholder="Search Location"
          />
        </div>

        <div className="icon">
          <Link>
            <FaSearch style={{ color: "white" }} size={25} />
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
