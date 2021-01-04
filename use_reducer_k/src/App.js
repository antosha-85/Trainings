import React, { useState, useReducer } from "react";
import "./App.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increase() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrease() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={decrease}>-</button>
      <span>{state.count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
