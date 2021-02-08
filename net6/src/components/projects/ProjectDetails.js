import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
  const {
    project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>Jan-28, 2021</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Project loading...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownState) => {
  const id = ownState.match.params.id;
  const projects = state.firestore.data.Projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Projects" }])
)(ProjectDetails);
