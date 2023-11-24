// SCSS
import "./Referalpage.scss";

// IMPORTING DIFFERENT COMPONENTS
import Referalcomp from "./Components/Referalcomponent/Referalcomp";
import Sharecode from "./Components/Sharecode/Sharecode";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
const Referalpage = () => {
  return (
    <div className="mainreferalcontainerxyz">
      <div className="referal-alignment">
        <Navbar index="8" />
      </div>
      <div className="main-referal-container">
        <div className="referal-main-container">
          <div className="referal-heading">
            <h1>Refer and get a chance to get verified.</h1>
          </div>
          <div>
            <Referalcomp />
          </div>
          <div>
            <Sharecode />
          </div>
        </div>
      </div>
      <div className="footer-styling">
        <Footer />
      </div>
    </div>
  );
};

export default Referalpage;
