import React, { Fragment, useState } from "react";
import classes from "./LoginContent.module.css";
import "../../index.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import xIcon from "../../Assets/Icons/bx-x.svg";
//import AdminAddProduct from "./AdminAddProduct";
//import AdminProductList from "./AdminProductList";

const LoginContent = () => {
  const [diplayMessage, setDisplayMessage] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisplayMessage((prevState) => !prevState);
  };

  const closeMsgHandler = () => {
    setDisplayMessage((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            {/* <p className={classes.waringText}>I dont remember giving you access...</p> */}
            <form onClick={submitHandler} className={classes.form}>
              <h5 className={classes.title}>Username</h5>
              <Input />
              <h5 className={classes.title}>Password</h5>
              <Input />
              <div className={classes.btnpostion}>
                <Button type={"sumbit"}>Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {diplayMessage && (
        <div className={classes.messageContainer}>
          <img src={xIcon} alt="X" onClick={closeMsgHandler} className={classes.closeBtn} />
          <div className={classes.message}>Sorry, display purposes only</div>
        </div>
      )}
      {diplayMessage && <div className={classes.overlay}></div>}
    </Fragment>
  );
};

export default LoginContent;
