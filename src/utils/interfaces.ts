export interface iAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface iPokeType {
  name: string;
  hexColor: string;
}
interface iGameIndiceVersion {
  name: string;
  url: string;
}

interface iHeldItems_Item {
  name: string;
  url: string;
}
interface iHeldItems_version {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

export interface iMoves {
  move: { name: string; url: string }[];
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}
export interface iPokemonResponse {
  abilities: iAbilities[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: iGameIndiceVersion[] | iGameIndiceVersion;
  }[];
  height: number;
  held_items: [
    {
      item: iHeldItems_Item[];
      version_details: iHeldItems_version[];
    }
  ];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: iMoves[];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      home: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
    versions: {
      [key: string]: {
        back_default: string;
        back_shiny: string;
        back_shiny_transparent: string;
        back_transparent: string;
        front_default: string;
        front_shiny: string;
        front_shiny_transparent: string;
        front_transparent: string;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  weight: number;
}
