import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    console.log("e.target", e.target);
    console.log("e.target in brackets", [e.target.id]);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handle;
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create a new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-index-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
