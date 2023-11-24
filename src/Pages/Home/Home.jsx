//scss
import "./Home.scss";

// importing different components
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// import JobCategories from "../Employer/Hire/Components/Job Category/JobCategories";
import ProfileDataCards from "../Employer/Hire/Components/ProfileCards/ProfileDataCards";
import Hero from "./Components/Hero";
import Jobcard from "./Components/Jobcard"

const Home = () => {
  return (
    <>
      <div className="home-alignment">
        <div className="home-top">
          <Navbar index="0" />
        </div>
        <div className="home-content">
          <Hero />
          {/* <JobCategories /> */}
          <Jobcard/>
          <ProfileDataCards />
        </div>
        <div className="home-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
