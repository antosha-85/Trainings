import React from "react";

export default class Taskbar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="task" placeholder="Add your tasks here"></input>
        <button>Add task</button>
      </div>
    );
  }
}
