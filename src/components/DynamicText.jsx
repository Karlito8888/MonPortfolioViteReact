import React from "react";
import { TypeAnimation } from "react-type-animation";

const DynamicText = () => {
  return (
    <div className="dynamic-text">
      <div>Intégrateur Web</div>
      <div id="text-target">
        <TypeAnimation
          sequence={["HTML & CSS ", 1500, "JAVACRIPT ", 1500, "REACT ", 1500]}
          wrapper="span"
          speed={10}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default DynamicText;
