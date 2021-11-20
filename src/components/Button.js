import classes from "../styles/Button.module.css";
import React from "react";

const Button = ({ className, children }) => {
  return (
    <div>
      <button className={`${classes.button} ${className}`}>{children}</button>
    </div>
  );
};

export default Button;
