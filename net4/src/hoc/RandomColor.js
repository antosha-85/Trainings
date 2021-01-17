import React from "react";

const RandomColor = (WrappedComponent) => {
  const colors = ["red", "pink", "organge", "blue", "green", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * 6)];
  const className = `${randomColor}-text`;
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default RandomColor;
