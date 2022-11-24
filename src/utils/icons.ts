import React from "react";
import Bug from "../assets/bug";

export function getIcon(type: string): any {
  switch (type) {
    case "bug":
      return Bug;
    case "dark":
      return Bug;
    case "dragon":
      return Bug;
    case "electric":
      return Bug;
    case "fairy":
      return Bug;
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
