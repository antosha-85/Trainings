import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import "./App.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
export const ACTIONS1 = {
  ADD_TODO: "addTodo",
  TOGGLE_TODO: "toggleTodo",
  DELETE_TODO: "deleteTodo",
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

const reducer1 = (todos, action) => {
  switch (action.type) {
    case ACTIONS1.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS1.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.currentId) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS1.DELETE_TODO:
      return [...todos.filter((todo) => {
        return todo.id !== action.payload.currentId;
      })];
    default:
      return todos;
  }
};

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

function App() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [todos, dispatch1] = useReducer(reducer1, []);
  const [name, setName] = useState("");

  function increase() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrease() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch1({
      type: ACTIONS1.ADD_TODO,
      payload: { name: name },
    });
    console.log("form was submitted");
    setName("");
  }
  console.log("todos", todos);
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={decrease}>-</button>
      <span>{state.count}</span>
      <button onClick={increase}>+</button>
      <h2>Some form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {/* <button>Submit</button> */}
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch1={dispatch1} />;
      })}
    </div>
  );
}

export default App;
