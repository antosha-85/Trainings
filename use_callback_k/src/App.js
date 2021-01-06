import React, { useState, useCallback } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (inc) => {
      return [number + inc, number + 1 + inc, number + 2 + inc];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevTheme) => !prevTheme)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
