import React from "react";
import RandomColor from "../hoc/RandomColor";
const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque
        labore iure eaque tenetur! Totam quaerat, asperiores dignissimos enim
        nihil natus quod! Eligendi unde voluptatibus quia sequi ab corrupti
        harum?
      </p>
    </div>
  );
};

export default RandomColor(About);
