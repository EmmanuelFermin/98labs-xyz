import createX from "../createX";
import createY from "../createY";
import createZ from "../createZ";

const generateArt = (
  textToTransform: string,
  enteredSize: number,
  charStyle: string
) => {
  let asciiArr: string[] = [];
  const textPattern = textToTransform.split("");

  //Logic here to create collection
  for (var i = 0; i < textToTransform.length; i++) {
    if (textPattern[i] === "X") {
      asciiArr.push(createX(enteredSize, charStyle));
    }
    if (textPattern[i] === "Y") {
      asciiArr.push(createY(enteredSize, charStyle));
    }
    if (textPattern[i] === "Z") {
      asciiArr.push(createZ(enteredSize, charStyle));
    }
  }

  return asciiArr;
};

export default generateArt;
