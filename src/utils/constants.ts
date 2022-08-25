import firstImg from "../assets/images/1.jpg";
import secondtImg from "../assets/images/2.jpg";
import thirdImg from "../assets/images/3.jpg";
import fouthImg from "../assets/images/4.jpg";
import fifthImg from "../assets/images/5.jpg";
import sixthImg from "../assets/images/6.jpg";
import seventhImg from "../assets/images/7.jpg";
import eightImg from "../assets/images/8.jpg";
import { createImageItemsArray } from "./helpers";

export const imgArray = [
  firstImg,
  secondtImg,
  thirdImg,
  fouthImg,
  fifthImg,
  sixthImg,
  seventhImg,
  eightImg,
];

export const complitedRandomImages = createImageItemsArray(imgArray);
