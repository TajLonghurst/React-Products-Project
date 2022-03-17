import ReactDOM from "react-dom";
import { Fragment } from "react";
import MobileFilterModal from "./MobileFilterModal";

const protalMobileFilterMenu = document.getElementById("MobileFilterMenu");

const ModalMobileFilter = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<MobileFilterModal />, protalMobileFilterMenu)}
    </Fragment>
  );
};

export default ModalMobileFilter;
