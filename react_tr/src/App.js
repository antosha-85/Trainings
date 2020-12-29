import React, { Component } from "react";
import "./App.css";
import Todos from './Components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with Oksana',
        completed: false
      },
      {
        id: 3,
        title: 'Roll out spools in the bush',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
