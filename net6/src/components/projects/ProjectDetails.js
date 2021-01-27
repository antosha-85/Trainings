import React from "react";

const ProjectDetails = (props) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title - {props.match.params.id}
          </span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            tenetur quia nobis nihil dicta, illum nostrum quam perspiciatis,
            esse exercitationem doloremque. Dolore minus aliquid quo ea quos
            optio non voluptatibus.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Anton Smirnov</div>
          <div>Jan-28, 2021</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
