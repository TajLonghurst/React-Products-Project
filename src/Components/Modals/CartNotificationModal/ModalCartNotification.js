import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import CartNotificationModal from "./CartNotificationModal";

const protalModalCartSucces = document.getElementById("ModalCartNotification");

const ModalCartNotification = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<CartNotificationModal />, protalModalCartSucces)}
    </Fragment>
  );
};

export default ModalCartNotification;
