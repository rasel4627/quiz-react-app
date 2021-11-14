import classes from "../styles/Button.module.css";
import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <div className={classes.button}>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Button;
