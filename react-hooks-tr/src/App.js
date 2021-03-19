import React, { useState } from "react";
import "./App.css";
import { useForm } from "./useForm";

function App() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, setValues] = useForm({ email: "", password: "" });
  // const [password, setPassword] = useState("");

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
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={setValues}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={setValues}
      />
    </div>
  );
}

export default App;
