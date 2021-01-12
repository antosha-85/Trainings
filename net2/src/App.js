import React, { Component } from "react";
import Anton from "./Anton";
import People from "./People";
import AddPeople from "./AddPeople";

export default class App extends Component {
  state = {
    people: [
      { name: "Anton", age: 35, gender: "male", id: 1 },
      {
        name: "Oksana",
        age: 34,
        gender: "female",
        id: 2,
      },
      { name: "Vitalik", age: 34, gender: "male", id: 3 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1>This is my React App component!</h1>
        <AddPeople />
        <Anton name="Anton" age="35" gender="male" />
        <Anton name="Oksana" age="34" gender="female" />
        <People people={this.state.people} />
      </div>
    );
  }
}
