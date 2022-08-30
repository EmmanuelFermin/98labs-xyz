import React from "react";

export interface IUIButtonProps {
  id: string;
  title: string;
  onClick?: React.MouseEventHandler;
  children?: string;
}

export interface IInputProps {
  type: string;
  id: string;
  innerRef: React.RefObject<HTMLInputElement>;
}

