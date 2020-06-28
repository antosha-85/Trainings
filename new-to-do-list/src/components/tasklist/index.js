import React from "react";
import { connect } from "react-redux";
import Task from '../Task'

class TaskList extends React.Component {
    render() {
        console.log('props', this.props)
        let tasks = null
        if(this.props.length >0 ) {
            tasks = this.props.tasks.map((task, index) => {
                return (<Task key={index}
                task={task}/>)
            })
        };

    return (
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tasks}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps)(TaskList);
