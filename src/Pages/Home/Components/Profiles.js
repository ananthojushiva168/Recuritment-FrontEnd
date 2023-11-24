//scss
import "./Profiles.scss";
// assets
import user from "../../../Assets/user.png";
import Verifyicon from "../../../Assets/verify.png";
// importing dependecis
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <div className="profiles">
      <div className="heading">
        <h2>Job Profiles</h2>
      </div>

      <div className="cards">
        <div className="card">
          <div className="box1">
            <div className="usericon">
              <img src={user} alt="" />
            </div>

            <div className="content">
              <div className="identity">
                <h6>XXXXXXXX</h6>
                <p>Designer</p>
              </div>

              <div className="verified">
                <img src={Verifyicon} alt="" />
                <p>Verified</p>
              </div>
            </div>
          </div>

          <div className="box2">
            <p>
              <b>Location</b> &nbsp; &nbsp; : &nbsp; &nbsp; Hyderabad
            </p>
            <p>
              <b>Email</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxxxxx
            </p>
            <p>
              <b>Phone</b> &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxx
            </p>
          </div>

          <div className="box3">
            <Link to="">
              <u>View</u>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="box1">
            <div className="usericon">
              <img src={user} alt="" />
            </div>

            <div className="content">
              <div className="identity">
                <h6>XXXXXXXX</h6>
                <p>Designer</p>
              </div>

              <div className="verified">
                <img src={Verifyicon} alt="" />
                <p>Verified</p>
              </div>
            </div>
          </div>

          <div className="box2">
            <p>
              <b>Location</b> &nbsp; &nbsp; : &nbsp; &nbsp; Hyderabad
            </p>
            <p>
              <b>Email</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxxxxx
            </p>
            <p>
              <b>Phone</b> &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxx
            </p>
          </div>

          <div className="box3">
            <Link to="">
              <u>View</u>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="box1">
            <div className="usericon">
              <img src={user} alt="" />
            </div>

            <div className="content">
              <div className="identity">
                <h6>XXXXXXXX</h6>
                <p>Designer</p>
              </div>

              <div className="verified">
                <img src={Verifyicon} alt="" />
                <p>Verified</p>
              </div>
            </div>
          </div>

          <div className="box2">
            <p>
              <b>Location</b> &nbsp; &nbsp; : &nbsp; &nbsp; Hyderabad
            </p>
            <p>
              <b>Email</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxxxxx
            </p>
            <p>
              <b>Phone</b> &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxx
            </p>
          </div>

          <div className="box3">
            <Link to="">
              <u>View</u>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="box1">
            <div className="usericon">
              <img src={user} alt="" />
            </div>

            <div className="content">
              <div className="identity">
                <h6>XXXXXXXX</h6>
                <p>Designer</p>
              </div>

              <div className="verified">
                <img src={Verifyicon} alt="" />
                <p>Verified</p>
              </div>
            </div>
          </div>

          <div className="box2">
            <p>
              <b>Location</b> &nbsp; &nbsp; : &nbsp; &nbsp; Hyderabad
            </p>
            <p>
              <b>Email</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxxxxx
            </p>
            <p>
              <b>Phone</b> &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp; &nbsp;
              xxxxxxxxxx
            </p>
          </div>

          <div className="box3">
            <Link to="">
              <u>View</u>
            </Link>
          </div>
        </div>
      </div>

      <div className="arrows">
        <div className="left">
          <FaArrowLeft style={{ color: "black" }} />
        </div>
        <div className="right">
          <FaArrowRight style={{ color: "black" }} />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
