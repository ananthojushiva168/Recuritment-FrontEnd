//SCSS
import "./hiretalent.scss";

// IMPORTING DIFFERENT COMPONENTS
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import JobCategories from "./Components/Job Category/JobCategories";
import ProfileDataCards from "./Components/ProfileCards/ProfileDataCards";

const HireTalent = () => {
  return (
    <div className="hire-alignment">
      <div className="hirePage-top-content">
        <Navbar index="4" />
        <div className="hire-cover">
          <div className="cover-head">
            <h1>Hire the Best Talent</h1>
            <div className="search-area">
              <input type="text" placeholder="Search category" />
              <input type="text" placeholder="Search Location" />
              <button>
                <img src={require( "../../../Assets/search.png" )} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hirePage-bottom-content">
        <div className="hire-sidebar">
          <Sidebar />
        </div>
        <div className="hirepage-data-profileCards">
          <JobCategories />
          <ProfileDataCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HireTalent;
