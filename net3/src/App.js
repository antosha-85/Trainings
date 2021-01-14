import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "go to the rig" },
      { id: 2, content: "program the tool" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo];
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos!</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
