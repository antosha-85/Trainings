import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
          setCount2((currentCount) => currentCount + 1);
        }}
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  );
}

export default App;
