import React, { useEffect } from "react";

const ChildComponent = React.memo((props) => {
  console.log("[ChildComponent] rendering!");
  const splitArray = props.array.join(" ");
  const { fetch } = props;
  useEffect(() => {
    fetch("users");
  }, [fetch]);
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Child Component!</p>
      {splitArray}
    </div>
  );
});

export default ChildComponent;
