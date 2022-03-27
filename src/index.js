import { generateFull } from "./generateFull";
import "./styles/main.scss";
import birdImg from "./assets/bird-g75782c7fa_640.jpg";

console.log(generateFull());
const imgTag = document.getElementById("imgTag");
imgTag.src = birdImg;
console.log("webpack learning");
