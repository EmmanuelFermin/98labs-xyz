import checkInput from "./checkInput";

const checkAndThrowError = (
  enteredText: string,
  enteredSize: number,
  blockDirection: string
) => {
  if (!enteredText && !enteredSize && !blockDirection)
    throw new Error("No input values");
  if (!enteredText) throw new Error("No entered letter/s");
  if (!enteredSize) throw new Error("No entered size");
  if (enteredSize < 3)
    throw new Error(
      "Size must be greater than or equal to 3 and an odd number"
    );
  if (enteredSize % 1 !== 0) {
    throw new Error("Size must be a whole number and not with decimal place");
  }
  if (!blockDirection) throw new Error("No entered direction");
  if (!checkInput(enteredText)) {
    throw new Error(
      "Letter/s must be only any combination of uppercase X, Y or Z"
    );
  }
};

export default checkAndThrowError;
