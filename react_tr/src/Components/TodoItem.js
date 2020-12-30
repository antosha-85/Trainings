import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4ff4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={buttonStyle} onClick={this.props.deleteTodo.bind(this, id)}> Delete Todo</button>
        </p>
      </div>
    );
  }
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const buttonStyle = {
  background: "#gray",
  color: "#gray",
  border: "1px solid black",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
