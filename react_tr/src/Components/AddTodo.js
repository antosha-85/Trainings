import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo"
          style={{ flex: "10", padding: "10px" }}
        />
        <input
          type="submit"
          value="Add Todo"
          className="btnAddTodo"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
