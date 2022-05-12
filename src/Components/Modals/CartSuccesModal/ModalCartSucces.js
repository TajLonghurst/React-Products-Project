import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import CartSuccesModal from "./CartSuccesModal";

const protalModalCartSucces = document.getElementById("ModalCartSucces");

const ModalCartSucces = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<CartSuccesModal />, protalModalCartSucces)}
    </Fragment>
  );
};

export default ModalCartSucces;
