import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo"
          style={{ flex: "10", padding: "10px" }}
          value={this.state.title}
          onChange={this.onChangeHandler}
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
