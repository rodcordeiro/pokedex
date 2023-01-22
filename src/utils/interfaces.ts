export interface IColors {
  tag: string;
  background: string;
}
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

interface IEvolutionDetails {
  gender: any;
  held_item: any;
  item: any;
  known_move: any;
  known_move_type: any;
  location: any;
  min_affection: any;
  min_beauty: any;
  min_happiness: any;
  min_level: 16;
  needs_overworld_rain: boolean;
  party_species: any;
  party_type: any;
  relative_physical_stats: any;
  time_of_day: '';
  trade_species: any;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}
export interface IEvolvesTo {
  evolution_details: IEvolutionDetails[];
  evolves_to: IEvolvesTo[];
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
}
export interface IPokemonEvolutionChain {
  // https://pokeapi.co/api/v2/evolution-chain/2/

  baby_trigger_item: any;
  chain: {
    evolution_details: any[];
    evolves_to: IEvolvesTo[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  };
  id: number;
}
export interface IPokemonResponse {
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
    },
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
      'official-artwork': {
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

export interface IPokemonSpecie {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: [
    {
      name: string;
      url: string;
    },
  ];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
      version: {
        name: string;
        url: string;
      };
    },
  ];
  form_descriptions: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: [
    {
      genus: string;
      language: {
        name: string;
        url: string;
      };
    },
  ];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: [
    {
      language: {
        name: string;
        url: string;
      };
      name: string;
    },
  ];
  order: number;
  pal_park_encounters: [
    {
      area: {
        name: string;
        url: string;
      };
      base_score: number;
      rate: number;
    },
  ];
  pokedex_numbers: [
    {
      entry_number: number;
      pokedex: {
        name: string;
        url: string;
      };
    },
  ];
  shape: {
    name: string;
    url: string;
  };
  varieties: [
    {
      is_default: boolean;
      pokemon: {
        name: string;
        url: string;
      };
    },
  ];
}

export interface IPokemon extends IPokemonResponse {
  description: string;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  color: IColors;
  evolutions: {
    name: string;
    img: string;
  }[];
}

export type Pokemon = Partial<IPokemon>;
