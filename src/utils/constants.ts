import firstImg from "../assets/images/cardImages/1.jpg";
import secondtImg from "../assets/images/cardImages/2.jpg";
import thirdImg from "../assets/images/cardImages/3.jpg";
import fouthImg from "../assets/images/cardImages/4.jpg";
import fifthImg from "../assets/images/cardImages/5.jpg";
import sixthImg from "../assets/images/cardImages/6.jpg";
import seventhImg from "../assets/images/cardImages/7.jpg";
import eightImg from "../assets/images/cardImages/8.jpg";
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
