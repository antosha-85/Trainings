import React from "react";

const ProjectSummary = ({ project: { title, content } }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p>Posted by Anton Smirnov</p>
        <p className="grey-text">26-JAN-2021, 9PM</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
