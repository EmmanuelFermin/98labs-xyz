import React, {FC} from "react";
import replaceNxtLineWithBr from "../utils/replaceNxtLineWithBr";
import classes from "./AsciiArtItem.module.css";
import { AsciiArtProps } from "../types/ascii-art";


const AsciiArt:FC<AsciiArtProps> = ({ str }) => {
  return (
    <p
      className={classes["content_asciiArt"]}
      id="ascii-art-text"
      dangerouslySetInnerHTML={{ __html: replaceNxtLineWithBr(str) }}
    />
  );
};

export default AsciiArt;
