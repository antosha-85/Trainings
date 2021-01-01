import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/Layout/Header";
import AddTodo from "./Components/AddTodo";
import About from "./Components/pages/About";
import { v4 as uuidv4 } from "uuid";
class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out the trash",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Dinner with Oksana",
        completed: false,
      },
      {
        id: uuidv4(),
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
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      // todos: [...this.state.todos.concat({
      //   title:todo,
      //   completed: false,
      //   id: this.state.todos.length + 1
      // })]
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <AddTodo AddTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </>
              )}
            />
            <Route exact path="/about" render={(props) => <About />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
