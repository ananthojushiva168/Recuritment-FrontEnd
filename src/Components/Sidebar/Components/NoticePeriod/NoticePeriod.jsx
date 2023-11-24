// SCSS
import "./noticeperiod.scss";

const NoticePeriod = () => {
  return (
    <>
      <div className="notice-section">
        <h4>Notice Period</h4>
        <button>Immediately</button>
        <button>15 days - 1 month</button>
        <button>1 month - 2 months</button>
        <button>more than 3 months</button>
      </div>
    </>
  );
};

export default NoticePeriod;
