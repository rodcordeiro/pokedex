import { IColors } from "./interfaces";

export function getColor(type: string): IColors {
  switch (type) {
    case "bug":
      return { tag: "#94BC4A", background: "#94BC4AA0" };
    case "dark":
      return { tag: "#736C75", background: "#736C75A0" };
    case "dragon":
      return { tag: "#6A7BAF", background: "#6A7BAFA0" };
    case "electric":
      return { tag: "#E5C531", background: "#E5C531A0" };
    case "fairy":
      return { tag: "#E397D1", background: "#E397D1A0" };
    case "fighting":
      return { tag: "#CB5F48", background: "#CB5F48A0" };
    case "fire":
      return { tag: "#EA7A3C", background: "#EA7A3CA0" };
    case "flying":
      return { tag: "#7DA6DE", background: "#7DA6DEA0" };
    case "ghost":
      return { tag: "#846AB6", background: "#846AB6A0" };
    case "grass":
      return { tag: "#71C558", background: "#71C558A0" };
    case "ground":
      return { tag: "#CC9F4F", background: "#CC9F4FA0" };
    case "ice":
      return { tag: "#70CBD4", background: "#70CBD4A0" };
    case "normal":
      return { tag: "#AAB09F", background: "#AAB09FA0" };
    case "poison":
      return { tag: "#B468B7", background: "#B468B7A0" };
    case "psychic":
      return { tag: "#E5709B", background: "#E5709BA0" };
    case "rock":
      return { tag: "#B2A061", background: "#B2A061C0A0" };
    case "steel":
      return { tag: "#89A1B0", background: "#89A1B0A0" };
    case "water":
      return { tag: "#539AE2", background: "#539AE2A0" };
    default:
      return { tag: "#539AE2", background: "#539AE2A0" };
  }
}
