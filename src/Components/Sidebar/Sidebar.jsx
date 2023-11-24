// SCSS
import "./Sidebar.scss";

// IMPORTING DIFFERENT COMPONENTS
import Location from "./Components/Location/Location";
import Ctc from "./Components/Ctc/Ctc";
import Skills from "./Components/Skills/Skills";
import WorkMode from "./Components/WorkMode/WorkMode";
import NoticePeriod from "./Components/NoticePeriod/NoticePeriod";
import JobType from "./Components/JobType/JobType";
import UserStatus from "./Components/UserStatus/UserStatus";
import Experience from "./Components/Experience/Experience";

const Sidebar = () => {
  return (
    <>
      <div className="main-sidebar">
        <div className="filter-head">
          <h2>Filters</h2>
          <span>Clear all</span>
        </div>
        <div className="sidebar-menu">
          <Location />
          <Experience />
          <Ctc />
          <Skills />
          <WorkMode />
          <NoticePeriod />
          <JobType />
          <UserStatus />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
