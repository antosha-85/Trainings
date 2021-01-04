import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");
  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Hi Anton!";
    console.log(
      "🚀 ~ file: App.js ~ line 11 ~ handleFocus ~ inputRef",
      inputRef.current
    );
  };
console.log('1')
  useEffect(() => {
    renderCount.current += 1;
  });
  console.log('2')
  useEffect(() => {
    console.log('3')
    prevName.current = name;
    console.log('4')
  }, [name]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
        />
        {console.log('5')}
      <div>My name is {name} and it used to be {prevName.current}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={handleFocus}>Focus </button>
    </>
  );
}

export default App;
