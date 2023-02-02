import { RouteProp } from '@react-navigation/native';
export type RootStackParamList = {
  HomeScreen: {
    origin: keyof RootStackParamList;
  };
  PokemonScreen: {
    origin: keyof RootStackParamList;
  };
  FavoritesScreen: {
    origin: keyof RootStackParamList;
  };
};
