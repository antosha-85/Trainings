import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("[ChildComponent] rendering!");
  return (
    <div>
      <p>Child Component!</p>
    </div>
  );
});

export default ChildComponent;
