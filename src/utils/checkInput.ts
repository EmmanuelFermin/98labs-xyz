const checkInput = (input: string): boolean => {
  return input
    .split("")
    .every((currVal) => currVal === "X" || currVal === "Y" || currVal === "Z");
};

export default checkInput;
