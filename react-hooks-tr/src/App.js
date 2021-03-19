import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
    </div>
  );
}

export default App;
