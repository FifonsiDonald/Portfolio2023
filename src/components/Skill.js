import React from "react";

const Skill = (props) => {
  const progressBarStyles = {
    width: props.width,
    backgroundColor: "#4caf50",
    height: "100%",
    borderRadius: "0 20px 20px 0",
    transition: "width 1s",
  };

  const progressContainerStyles = {
    backgroundColor: "#ddd",
    height: "10px",
    borderRadius: "5px",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div className="skill">
      <h3>{props.name}</h3>
      <div className="progress" style={progressContainerStyles}>
        <div className="progress-bar" style={{ ...progressBarStyles }}>
          <div className="fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
