import React from "react";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title</span>
          <p>Posted by Anton Smirnov</p>
          <p className="grey-text">26-JAN-2021, 9PM</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title1</span>
          <p>Posted by Anton Smirnov</p>
          <p className="grey-text">27-JAN-2021, 9PM</p>
        </div>
      </div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title2</span>
          <p>Posted by Anton Smirnov</p>
          <p className="grey-text">28-JAN-2021, 9PM</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
