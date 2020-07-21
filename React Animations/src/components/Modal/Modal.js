import React from "react";
import classes from './Modal.module.css'
// import "./Modal.css";

const modal = (props) => {
  const cssClasses = [classes.Modal, props.show ? classes.ModalOpen : classes.ModalClosed];
  return (
    <div className={cssClasses.join(' ')}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
