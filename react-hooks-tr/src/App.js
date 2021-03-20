import React, { useState, useEffect } from "react";
import "./App.css";
import { Hello } from "./Hello";
import { useForm } from "./useForm";

function App() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, setValues] = useForm({ email: "", password: "", firstName: "" });
  // const [password, setPassword] = useState("");
  // useEffect(()=> {
  //   console.log('render')
  //   return ()=> {
  //     console.log('unmount!')
  //   }
  // }, [])
  const [showHello, setShowHello] = useState(true)

  return (
    <div className="App">
      <button onClick={()=> setShowHello(!showHello)}>Toggle Hello!</button>
      {showHello ? <Hello/> : null}
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
        placeholder="Email"
      />
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={setValues}
        placeholder="First Name"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={setValues}
        placeholder="Password"
      />
    </div>
  );
}

export default App;
