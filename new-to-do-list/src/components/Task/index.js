import React from "react";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux'
import {deleteTask} from '../../actions/index'
class Task extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.task}</td>
        <td>
            <button onClick={this.props.deleteTask(this.props.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({deleteTask}, dispatch)
}

export default connect(null, mapDispatchToProps)(Task)