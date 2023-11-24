//SCSS
import "./Footer.scss";
// IMPORTING DEPENSECIS
import { Link } from "react-router-dom";

//React-Icons
import { FaFacebook, FaInbox, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="hrmode" id="btm">
        <h1>HR MOD</h1>
        <p>
          © 2022 <br /> All rights reserved
        </p>
      </div>

      <div className="footerlinks" id="btm">
        <Link to="/">HOME</Link>
        <Link to="/work">WORK</Link>
        <Link to="/hire">HIRE</Link>
        <Link to="/about">ABOUT US</Link>
      </div>

      <div className="footercontact" id="btm">
        <Link to="">Contact</Link>
        <Link to="">Terms Of Service</Link>
        <Link to="">Terms Of Service</Link>
      </div>

      <div className="followus" id="btm">
        <h2>Follow Us</h2>

        <div className="icons">
          <div className="icon">
            <Link to="">
              <FaFacebook style={{ color: "white" }} />
            </Link>
            <Link to="">Facebook</Link>
          </div>

          <div className="icon">
            <Link to="">
              <FaTwitter style={{ color: "white" }} />
            </Link>
            <Link to="">Twitter</Link>
          </div>

          <div className="icon">
            <Link to="">
              <FaInstagram style={{ color: "white" }} />
            </Link>
            <Link to="">Instagram</Link>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <h2>SUBSCRIBE TO OUR NEWS</h2>
        <p>
          Get quick updates to your <br /> inbox.
        </p>
        <div className="email">
          <input type="email" placeholder="E-Mail" />
          <div className="mailicon">
            <Link to="">
              <FaInbox style={{ color: "white" }} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
