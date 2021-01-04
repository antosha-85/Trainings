import React from "react";
import { ACTIONS1 } from "./App";

export default function Todo({ todo, dispatch1 }) {
  return (
    <div>
      <span
        style={
          todo.complete
            ? { color: "green", textDecoration: "line-through" }
            : { color: "red" }
        }
      >
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch1({
            type: ACTIONS1.TOGGLE_TODO,
            payload: { currentId: todo.id },
          })
        }
      >
        Toggle Todo
      </button>
      <button>Delete Todo</button>
    </div>
  );
}
