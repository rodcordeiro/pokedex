import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
  padding: 5px 10px;
`;

export const PokeImage = styled.Image`
  height: 300px;
  width: auto;
  background-color: red;
`;
