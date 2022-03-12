import ReactDOM from "react-dom";
import { Fragment } from "react";
import MobileNavigationMenu from "./MobileNavigationMenu";

const protalMobileNavigation = document.getElementById("MobileNavigationMenu");

export const ModalsIndex = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<MobileNavigationMenu />, protalMobileNavigation)}
    </Fragment>
  );
};
