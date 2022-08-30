// Function to create the pattern of 'Y'
const createY = (enteredSize: number, charStyle: string) => {
  let pieceOfArt = "";
  let size = enteredSize - 1;

  let row;
  let col;
  let counter = 0;

  for (row = 0; row < size + 1; row++) {
    for (col = 0; col <= size; col++) {
      if (col === counter || (col === size - counter && row <= size / 2)) {
        pieceOfArt += charStyle;
      } else {
        pieceOfArt += "&nbsp";
      }
    }
    pieceOfArt += "\n";

    if (row < size / 2) {
      counter++;
    }
  }
  return pieceOfArt;
};

export default createY;
