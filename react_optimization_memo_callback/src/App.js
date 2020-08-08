import React, { useState, useMemo } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
// const array = ["One", "Two", "Three"] alternative of useMemo especially if our array doesn't depend on anything
function App() {
  const [count, setCount] = useState(0);
  const array = useMemo(() => {
    return ["One", "Two", "Three"];
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          ADD
        </button>
        <ChildComponent title="This is a title!" array={array} />
      </header>
    </div>
  );
}

export default App;
