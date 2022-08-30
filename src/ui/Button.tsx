import React, { FC } from "react";
import { IUIButtonProps } from "../types/ui";

const Button: FC<IUIButtonProps> = ({ id, onClick, title }): JSX.Element => {
  return (
    <button id={id} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
