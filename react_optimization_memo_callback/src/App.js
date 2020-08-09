import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
// const array = ["One", "Two", "Three"] alternative of useMemo especially if our array doesn't depend on anything
function App() {
  const [count, setCount] = useState(0);
  const array = useMemo(() => {
    const array = ["One", "Two", "Three"];
    return array;
  }, []);

  const fetchData = useCallback(type => {
     fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
    .then(response => response.json())
    .then(json => console.log(json))
  }, [])
  useEffect(() => {
   fetchData('todos')
  }, [fetchData]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>
        <button type="button" onClick={() => setCount(count + 1)}>
          ADD
        </button>
        <ChildComponent title="This is a title!" array={array} fetch={fetchData}/>
      </header>
    </div>
  );
}

export default App;
