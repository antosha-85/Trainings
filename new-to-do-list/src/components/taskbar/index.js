import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask } from "../../actions";

class Taskbar extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="task" placeholder="Add your tasks here"></input>
        <button onClick={()=>this.props.addTask(this.refs.task.value)}>Add task</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
return bindActionCreators({addTask}, dispatch)
}

export default connect(null, mapDispatchToProps)(Taskbar)