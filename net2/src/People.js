import React, { Component } from "react";

export default class People extends Component {
  render() {
    const {people} = this.props;
    return people.map((person) => {
        const {name, age, gender, id} = person;
      return (
        <div className="anton" key={id}>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>I'm {gender}</div>
          <div>Welcome, friends!</div>
        </div>
      );
    });
  }
}
