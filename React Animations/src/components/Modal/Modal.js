import React from "react";
// import classes from "./Modal.module.css";
import CSSTransition from "react-transition-group/CSSTransition";
// import Transition from "react-transition-group/Transition";
import "./Modal.css";
const animationTiming = {
  enter: 400, 
  exit: 1000
}

const modal = (props) => {
  return (
    <CSSTransition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit
    classNames='fade-slide'>
      {/* {(state) => {
        const cssClasses = [
          classes.Modal,
          state === "entering"
            ? classes.ModalOpen
            : state === "exiting"
            ? classes.ModalClosed
            : null,
        ];
        return ( */}
          <div className='Modal'>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        {/* );
      }} */}
    </CSSTransition>
  );
};

export default modal;
