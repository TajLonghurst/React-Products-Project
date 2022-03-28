import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      value={props.value}
      ref={props.ref}
      className={classes.input}
      type={props.type}
    />
  );
};

export default Input;
