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
  addNewPerson = (person) => {
    person.id = Math.random();
    this.setState({
      people: [...this.state.people, person],
    });
  };

  deletePerson = (id) => {
    this.setState({
      people: [
        ...this.state.people.filter((person) => {
          return person.id !== id;
        }),
      ],
    });
  };
  componentDidMount() {
    console.log("component mounted!");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component updated");
    console.log("🚀 ~ file: App.js ~ line 39 ~ App ~ componentDidUpdate ~ snapshot", snapshot)
    console.log(
      "🚀 ~ file: App.js ~ line 35 ~ App ~ componentDidUpdate ~  prevState",
      prevState
    );
    console.log(
      "🚀 ~ file: App.js ~ line 35 ~ App ~ componentDidUpdate ~ prevProps",
      prevProps
    );
    console.log('checking current state', this.state)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("🚀 ~ file: App.js ~ line 52 ~ App ~ shouldComponentUpdate ~ nextState", nextState)
    console.log("🚀 ~ file: App.js ~ line 52 ~ App ~ shouldComponentUpdate ~ nextProps", nextProps)
    console.log('calling from shoudl component update')
    return true
  }
  render() {
    return (
      <div className="App">
        <h1>This is my React App component!</h1>
        <AddPeople addNewPerson={this.addNewPerson} />
        <Anton name="Anton" age="35" gender="male" />
        <Anton name="Oksana" age="34" gender="female" />
        <People people={this.state.people} deletePerson={this.deletePerson} />
      </div>
    );
  }
}
