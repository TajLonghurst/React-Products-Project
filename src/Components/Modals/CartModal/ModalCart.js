import ReactDOM from "react-dom";
import { Fragment } from "react";
import CartModal from "./CartModal";

const protalModalCart = document.getElementById("ModalCart");

const ModalCart = () => {
  return (
    <Fragment>{ReactDOM.createPortal(<CartModal />, protalModalCart)}</Fragment>
  );
};

export default ModalCart;
