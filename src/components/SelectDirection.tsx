import React, { FC } from "react";
import ISelectProps from "../types/select-direction";

const SelectDirection: FC<ISelectProps> = ({
  id,
  name,
  onChange,
  value,
}): JSX.Element => {

  
  return (
    <select name={name} id={id} onChange={onChange} value={value}>
      <option value="" disabled hidden>
        Choose here
      </option>
      <option value="horizontal">horizontal</option>
      <option value="vertical">vertical</option>
    </select>
  );
};

export default SelectDirection;
