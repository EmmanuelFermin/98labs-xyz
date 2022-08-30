import React, { useState, useRef } from "react";
import type { FC } from "react";
import classes from "./Main.module.css";
import generateArt from "../utils/generateArt";
import checkAndThrowError from "../utils/checkAndThrowError";
import { DirectionType } from "../enums";
import AsciiArtItem from "./AsciiArtItem";
import Button from "../ui/Button";
import Input from "../ui/Input";
import SelectDirection from "./SelectDirection";

const charStyle = "o";

type JSXState = JSX.Element | JSX.Element[];

const Main: FC = (props) => {
  const [asciiArt, setAsciiArt] = useState<string[]>([]);
  const [blockDirection, setBlockDirection] = useState<string>("");
  const [isOddNumber, setIsOddNumber] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

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
        setIsGenerated(true);

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
        setIsGenerated(false);
        break;
      case DirectionType.VERTICAL:
        setBlockDirection("vertical");
        setIsGenerated(false);
        break;
    }
  };

  let content: JSXState = <p></p>;

  if (isOddNumber && asciiArt.length > 0 && blockDirection && isGenerated) {
    content = (
      <div className={classes[`content_wrapper--${blockDirection}`]}>
        {asciiArt.map((el, index) => (
          <AsciiArtItem key={index} str={el} />
        ))}
      </div>
    );
  }

  return (
    <main className={classes.container}>
      <h1>Text to ASCII art-like</h1>
      <section className={classes.counter_formGroup}>
        <div className={classes.control}>
          <label htmlFor="users-input">Letters</label>
          <Input type="text" id="users-input" innerRef={inputTextRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="users-size">Size</label>
          <Input type="number" id="users-size" innerRef={inputSizeRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="users-size">Direction</label>
          <SelectDirection
            id="users-direction"
            name="direction"
            onChange={handleDirection}
            value={blockDirection}
          />
        </div>
      </section>

      <section className={classes.action}>
        <Button
          id="enter"
          onClick={handleGenerateArt}
          title="Generate ASCII Art"
        />
      </section>

      <p>Display Here 👇</p>
      {content}
    </main>
  );
};

export default Main;
