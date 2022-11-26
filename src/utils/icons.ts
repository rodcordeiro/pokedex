import React, { MemoExoticComponent } from "react";
import Bug from "../assets/bug";
import Dark from "../assets/dark";
import Dragon from "../assets/dragon";
import Electric from "../assets/dragon";
import Fairy from "../assets/fairy";

export function getIcon(type: string): MemoExoticComponent<any> {
  switch (type) {
    case "bug":
      return Bug;
    case "dark":
      return Dark;
    case "dragon":
      return Dragon;
    case "electric":
      return Electric;
    case "fairy":
      return Fairy;
    case "fighting":
      return Bug;
    case "fire":
      return Bug;
    case "flying":
      return Bug;
    case "ghost":
      return Bug;
    case "grass":
      return Bug;
    case "ground":
      return Bug;
    case "ice":
      return Bug;
    case "normal":
      return Bug;
    case "poison":
      return Bug;
    case "psychic":
      return Bug;
    case "rock":
      return Bug;
    case "steel":
      return Bug;
    case "water":
      return Bug;
    default:
      return Bug;
  }
}
