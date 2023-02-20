import React, { MemoExoticComponent } from 'react';
import Bug from '../assets/bug';
import Dark from '../assets/dark';
import Dragon from '../assets/dragon';
import Electric from '../assets/electric';
import Fairy from '../assets/fairy';
import Fighting from '../assets/fighting';
import Fire from '../assets/fire';
import Flying from '../assets/flying';
import Ghost from '../assets/ghost';
import Ice from '../assets/ice';
import Pokeball from '../assets/pokeball_2';

export function getIcon(type: string): MemoExoticComponent<any> {
  switch (type) {
    case 'bug':
      return Bug;
    case 'dark':
      return Dark;
    case 'dragon':
      return Dragon;
    case 'electric':
      return Electric;
    case 'fairy':
      return Fairy;
    case 'fighting':
      return Fighting;
    case 'fire':
      return Fire;
    case 'flying':
      return Flying;
    case 'ghost':
      return Ghost;
    // case "grass":
    //   return Bug;
    // case "ground":
    //   return Bug;
    case 'ice':
      return Ice;
    // case "normal":
    //   return Bug;
    // case "poison":
    //   return Bug;
    // case "psychic":
    //   return Bug;
    // case "rock":
    //   return Bug;
    // case "steel":
    //   return Bug;
    // case "water":
    //   return Bug;
    default:
      return Pokeball;
  }
}
