import React, { useState, useRef } from "react";
import type { FC } from "react";
import classes from "./Main.module.css";
import generateArt from "../utils/hof/generateArt";
import replaceNxtLineWithBr from "../utils/replaceNxtLineWithBr";
import checkAndThrowError from "../utils/errors";
import { DirectionType } from "../enums";

const charStyle = "o";

type JSXState = JSX.Element | JSX.Element[];

const Main: FC = (props) => {
  const [asciiArt, setAsciiArt] = useState<string[]>([]);
  const [blockDirection, setBlockDirection] = useState<string>("");
  const [isOddNumber, setIsOddNumber] = useState(false);

  const inputTextRef = useRef<HTMLInputElement>(null);
  const inputSizeRef = useRef<HTMLInputElement>(null);

  const handleGenerateArt = () => {
    try {
      const enteredText: string = inputTextRef.current!.value;
      const enteredSize: number = Number(inputSizeRef.current!.value);
      checkAndThrowError(enteredText, enteredSize, blockDirection);

      // Checks if size is an odd number
      if (enteredSize % 2 === 0 && enteredSize >= 3) {
        setIsOddNumber(false);
        throw new Error("Not an odd number");
      } else {
        setIsOddNumber(true);

        // Creates Array of Strings that depends on Text Input
        const asciiArtArray = generateArt(enteredText, enteredSize, charStyle);
        setAsciiArt(asciiArtArray);
      }
    } catch (err) {
      setAsciiArt([]);
      setTimeout(() => {
        alert((err as Error).message);
      }, 10);
    }
  };

  const handleDirection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const val = event.target.value;
    switch (val) {
      case DirectionType.HORIZONTAL:
        setBlockDirection("horizontal");
        break;
      case DirectionType.VERTICAL:
        setBlockDirection("vertical");
        break;
    }
  };

  let content: JSXState = <p></p>;

  if (isOddNumber && asciiArt.length > 0 && blockDirection) {
    content = (
      <div className={classes[`content_wrapper--${blockDirection}`]}>
        {asciiArt.map((el, index) => (
          <p
            key={index}
            className={classes["content_asciiArt"]}
            id="ascii-art-text"
            dangerouslySetInnerHTML={{ __html: replaceNxtLineWithBr(el) }}
          />
        ))}
      </div>
    );
  }

  return (
    <main className={classes.container}>
      <h1>Text to ASCII art-like</h1>
      <section className={classes.counter_formGroup}>
        <div className={classes.control}>
          <label>Letters</label>
          <input type="text" id="users-input" ref={inputTextRef} />
        </div>

        <div className={classes.control}>
          <label>Size</label>
          <input type="number" id="users-size" ref={inputSizeRef} />
        </div>

        <div className={classes.control}>
          <label>Direction</label>
          <select
            name="direction"
            id="users-direction"
            onChange={handleDirection}
            value={blockDirection}
          >
            <option value="" disabled hidden>
              Choose here
            </option>
            <option value="horizontal">horizontal</option>
            <option value="vertical">vertical</option>
          </select>
        </div>
      </section>

      <section className={classes.action}>
        <button id="enter" onClick={handleGenerateArt}>
          Generate ASCII Art
        </button>
      </section>

      <p>Display Here 👇</p>
      {content}
    </main>
  );
};

export default Main;
