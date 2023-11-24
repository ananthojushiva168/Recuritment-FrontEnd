import * as React from "react";

// SCSS
import "./experience.scss";

// MUI
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Experience = () => {
  return (
    <div className="experience">
      <h4>
        Experience <span>(in years)</span>
      </h4>
      <Box className="boxxx">
        <Slider
          aria-label="Always visible"
          defaultValue={5}
          step={1}
          max={20}
          valueLabelDisplay="on"
        />
      </Box>
    </div>
  );
};

export default Experience;
