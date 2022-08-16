import React from "react";

const ColorfulMsg = (props) => {
  // console.log(props);
  const { color, children } = props;
  const pStyle = {
    color,
    fontSize: "25px"
  };
  return <p style={pStyle}>{children}</p>;
};

export default ColorfulMsg;
