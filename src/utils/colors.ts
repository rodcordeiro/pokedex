export function getColor(type: string): { tag: string; background: string } {
  switch (type) {
    case "bug":
      return { tag: "#94BC4A", background: "#94BC4A" };
    case "dark":
      return { tag: "#736C75", background: "#736C75" };
    case "dragon":
      return { tag: "#6A7BAF", background: "#6A7BAF" };
    case "electric":
      return { tag: "#E5C531", background: "#E5C531" };
    case "fairy":
      return { tag: "#E397D1", background: "#E397D1" };
    case "fighting":
      return { tag: "#CB5F48", background: "#CB5F48" };
    case "fire":
      return { tag: "#EA7A3C", background: "#EA7A3C" };
    case "flying":
      return { tag: "#7DA6DE", background: "#7DA6DE" };
    case "ghost":
      return { tag: "#846AB6", background: "#846AB6" };
    case "grass":
      return { tag: "#71C558", background: "#71C558" };
    case "ground":
      return { tag: "#CC9F4F", background: "#CC9F4F" };
    case "ice":
      return { tag: "#70CBD4", background: "#70CBD4" };
    case "normal":
      return { tag: "#AAB09F", background: "#AAB09F" };
    case "poison":
      return { tag: "#B468B7", background: "#B468B7" };
    case "psychic":
      return { tag: "#E5709B", background: "#E5709B" };
    case "rock":
      return { tag: "#B2A061", background: "#B2A061" };
    case "steel":
      return { tag: "#89A1B0", background: "#89A1B0" };
    case "water":
      return { tag: "#539AE2", background: "#539AE2" };
    default:
      return { tag: "#539AE2", background: "#539AE2" };
  }
}
