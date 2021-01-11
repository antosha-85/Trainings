import React, { Component } from "react";

export default class Anton extends Component {
  render() {
    const { name, age, gender } = this.props;
    return (
      <div className="anton">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>I'm {gender}</div>
        <div>Welcome, friends!</div>
      </div>
    );
  }
}
