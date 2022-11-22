import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface iHeader {
  background: string;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
  width: 100%;
  height: 100%;
`;

export const Header = styled.View<iHeader>`
  padding: 5px 10px;
  background-color: ${(props) => props.background};
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const PokeName = styled.Text`
  /* position: absolute;
  bottom: 5px;
  background-color: #f4f4f490;
  border-radius: 15px;
  min-width: 50%;
  width: auto;*/
  padding: 0 20px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

export const PokeImage = styled.Image`
  height: 250px;
  width: auto;
`;
