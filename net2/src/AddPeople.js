import React, { Component } from "react";

export default class AddPeople extends Component {
  state = {
    name: null,
    age: null,
    gender: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
          />
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" onChange={this.handleChange} />
          <label htmlFor="name">Gender</label>
          <input
            type="text"
            name="gender"
            id="gender"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
