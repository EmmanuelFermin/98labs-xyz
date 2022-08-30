// Function to create the pattern of 'X'
const createX = (enteredSize: number, charStyle: string): string => {
  let pieceOfArt = "";
  let size = enteredSize - 1;

  let row;
  let col;
  let counter = 0;

  for (row = 0; row <= size; row++) {
    for (col = 0; col <= size; col++) {
      if (col === counter || col === size - counter) {
        pieceOfArt += charStyle;
      } else {
        pieceOfArt += "&nbsp";
      }
    }
    counter++;
    pieceOfArt += "\n";
  }
  return pieceOfArt;
};

export default createX;
