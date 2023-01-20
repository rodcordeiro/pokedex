import styled from "styled-components/native";

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
  text-emphasis: inherit;
  text-emphasis-color: black;
  font-family: Quicksand_700Bold;
`;

export const PokeId = styled.Text`
  color: white;
  font-size: 18px;
  font-family: PTMono_400Regular;
`;

export const PokeImage = styled.Image`
  /* height: 250px; */
  width: auto;
`;
export const PokeData = styled.View`
  width: 100%;
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
  margin: 10px;
  justify-self: center;
`;
