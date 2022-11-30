import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
  width: 100%;
  height: 100%;
`;

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
  font-family: Quicksand_700Bold;
`;
export const PokeId = styled.Text`
  color: white;
  font-size: 18px;
  font-family: PTMono_400Regular;
`;

export const PokeImage = styled.Image`
  height: 250px;
  width: auto;
`;
