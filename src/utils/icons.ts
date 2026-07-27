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
import Grass from '../assets/grass';
import Ground from '../assets/ground';
import Ice from '../assets/ice';
import Pokeball from '../assets/pokeball_2';
import Poison from '../assets/poison';
import Psychic from '../assets/psychic';
import Rock from '../assets/rock';
import Steel from '../assets/steel';
import Water from '../assets/water';

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
    case 'grass':
      return Grass;
    case 'ground':
      return Ground;
    case 'ice':
      return Ice;
    // case "normal":
    //   return Bug;
    case 'poison':
      return Poison;
    case 'psychic':
      return Psychic;
    case 'rock':
      return Rock;
    case 'steel':
      return Steel;
    case 'water':
      return Water;
    default:
      return Pokeball;
  }
}
