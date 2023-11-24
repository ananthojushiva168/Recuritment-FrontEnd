// SCSS
import "./About.scss";

// IMPORTING DIFFERENT COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Section from "../About/Components/Section";

const About = () => {
  return (
    <div className="aboutnew">
      <Navbar index="3" />
      <div className="about_ gap">
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default About;
