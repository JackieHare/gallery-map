import React from "react";


const InfoBox = ({ text, visible }) => {
  return (
    <div className={`info-box ${visible ? "visible" : "hidden"}`}>
      {text}
    </div>
  );
};

export default InfoBox;