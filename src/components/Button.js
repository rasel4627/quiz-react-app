import classes from "../styles/Button.module.css";
import React from "react";

const Button = ({ className, children }) => {
  return (
    <div>
      <div className={`${classes.button} ${className}`}>{children}</div>
    </div>
  );
};

export default Button;
