  //Replace \n to <br /> to separate string and create row
const replaceNxtLineWithBr = (toBeFormatStr: string) => {
  const asciiArtString = toBeFormatStr.replace(/\n/g, "<br />");
  return asciiArtString;
}

export default replaceNxtLineWithBr;