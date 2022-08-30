// Function to print the pattern of 'Z'
const createZ = (enteredSize: number, charStyle: string) => {
  let pieceOfArt = "";
  let size = enteredSize;

  let row;
  let col;
  let counter = size - 1;

  for (row = 0; row < size; row++) {
    for (col = 0; col < size; col++) {
      if (row === 0 || row === size - 1 || col === counter) {
        pieceOfArt += charStyle;
      } else {
        pieceOfArt += "&nbsp";
      }
    }
    counter--;
    pieceOfArt += "\n";
  }
  return pieceOfArt;
};

export default createZ;
