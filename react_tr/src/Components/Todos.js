import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        handleComplete={this.props.handleComplete}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
