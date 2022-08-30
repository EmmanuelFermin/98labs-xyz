import React, { FC } from "react";
import { IUIButtonProps } from "../types/ui";
import classes from "./Button.module.css"

const Button: FC<IUIButtonProps> = ({ id, onClick, title }): JSX.Element => {
  return (
    <button className={classes.btn} id={id} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
