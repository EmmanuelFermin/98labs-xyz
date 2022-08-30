import checkInput from "./checkInput";

const checkAndThrowError = (
  enteredText: string,
  enteredSize: number,
  blockDirection: string
) => {
  switch (true) {
    case !enteredText && !enteredSize && !blockDirection:
      throw new Error("No entered values");
    case !enteredText:
      throw new Error("No entered letter/s");
    case !enteredSize:
      throw new Error("No entered size");
    case enteredSize < 3:
      throw new Error(
        "Size must be greater than or equal to 3 and an odd number"
      );
    case enteredSize % 1 !== 0:
      throw new Error("Size must be a whole number and not with decimal place");
    case !blockDirection:
      throw new Error("No entered direction");
    case !checkInput(enteredText):
      throw new Error(
        "Letter/s must be only any combination of uppercase X, Y or Z"
      );
  }
};

export default checkAndThrowError;
