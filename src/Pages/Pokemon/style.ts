import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
  padding: 5px 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
`;
export const PokeName = styled.Text`
  padding: 0 20px;
  text-align: left;
  height: 40px;
  line-height: 40px;
  font-size: 40px;
  color: white;
  text-transform: uppercase;
  /* text-emphasis: inherit;
  text-emphasis-color: black; */
  font-family: Quicksand_700Bold;
`;

export const PokeId = styled.Text`
  color: white;
  font-size: 18px;
  font-family: PTMono_400Regular;
`;

export const PokeHabitatContainer = styled.View`
  flex-direction: row;
  height: 50px;
  padding: 0px 15px;
  align-items: center;
  /* margin: 0px 10px; */
`;

export const PokeImage = styled.Image`
  /* height: 250px; */
  width: auto;
`;
export const PokeData = styled.View`
  /* width: 100%; */
  width: 400px;
  max-width: 400px;
  min-height: 400px;
  flex: 1;
  /* background-color: white; */
`;

export const PokemonDescription = styled.Text`
  font-family: Quicksand_700Bold;
  text-align: justify;
  width: 80%;
  padding: 0px 5px;
  margin: 10px 15px;
`;

export const Text = styled.Text`
  font-family: Quicksand_700Bold;
`;
export const styles = StyleSheet.create({
  pokeNameStyle: {
    textShadowColor: '#18181866',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  pokeNameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    alignSelf: 'flex-start',
  },
  pokeIdContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeIdStyle: {
    marginLeft: 25,
    padding: 8,
    textShadowColor: '#18181866',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  imageSize: {
    height: 300,
    width: 300,
  },
  info_scrollview: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    height: 350,
  },
  evoInfoIcon: {
    // position: 'absolute',
    paddingLeft: 15,
    paddingRight: 5,
    paddingTop: 2.5,
    fontSize: 10,
  },
});
