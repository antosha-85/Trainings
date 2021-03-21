import React, { useState, useEffect } from "react";
import "./App.css";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

function App() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, setValues] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  // const [password, setPassword] = useState("");
  // useEffect(()=> {
  //   const onMouseMove = e => {
  //     console.log('event', e)
  //   }
  //   console.log('render')
  //   window.addEventListener('mousemove', onMouseMove)
  //   return ()=> {
  //   window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [])

  // http://numbersapi.com/43/trivia

  useEffect(() => {
    console.log("mount 1");
  }, []);
  useEffect(() => {
    console.log("mount 2");
  }, []);
  const [count3, setCount3] = useState(JSON.parse(localStorage.getItem("count3") || 0)
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count3}/trivia`);
  console.log("🚀 ~ file: App.js ~ line 38 ~ App ~ data", data)
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    localStorage.setItem("count3", JSON.stringify(count3));
  }, [count3]);
  return (
    <div className="App">
      <div>{!data ? "...loading" : data}</div>
      <div>count3: {count3}</div>
      <button onClick={() => setCount3(count3 + 1)}>
        New count(increment)
      </button>
      {/* <button onClick={()=> setShowHello(!showHello)}>Toggle Hello!</button>
      {showHello ? <Hello/> : null} */}
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
