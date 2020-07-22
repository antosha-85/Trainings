import React from "react";
import classes from "./Modal.module.css";
import Transition from "react-transition-group/Transition";
// import "./Modal.css";
const animationTiming = {
  enter: 400, 
  exit: 1000
}

const modal = (props) => {
  return (
    <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
      {(state) => {
        const cssClasses = [
          classes.Modal,
          state === "entering"
            ? classes.ModalOpen
            : state === "exiting"
            ? classes.ModalClosed
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
