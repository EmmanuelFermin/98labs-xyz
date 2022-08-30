import React, { FC } from "react";
import { IInputProps } from "../types/ui";

const Input: FC<IInputProps> = ({ type, id, innerRef }) => {
  return <input type={type} id={id} ref={innerRef} />;
};

export default Input;
