import React, { Component } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import Header from './Components/Layout/Header'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: true,
      },
      {
        id: 2,
        title: "Dinner with Oksana",
        completed: false,
      },
      {
        id: 3,
        title: "Roll out spools in the bush",
        completed: false,
      },
    ],
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => {
        return todo.id !== id;
      })],
    });
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Todos
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
