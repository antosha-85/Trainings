import React, { Component } from "react";
import Anton from "./Anton";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is my React App component!</h1>
        <Anton name="Anton" age="35" gender="male" />
        <Anton name="Oksana" age="34" gender="female" />
      </div>
    );
  }
}
