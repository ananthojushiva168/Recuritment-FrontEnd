// SCSS
import "./location.scss";

const Location = () => {
  return (
    <div className="location-bar">
      <h4>Location</h4>
      <select className="dropdown-tag">
        <option>select location</option>
        <option>Hyderabad</option>
        <option>Delhi</option>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Pune</option>
        <option>Mumbai</option>
      </select>
    </div>
  );
};

export default Location;
