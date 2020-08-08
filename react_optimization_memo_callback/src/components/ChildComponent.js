import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("[ChildComponent] rendering!");
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Child Component!</p>
    </div>
  );
});

export default ChildComponent;
