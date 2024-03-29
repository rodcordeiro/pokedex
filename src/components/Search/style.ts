import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';
import FeatherIcon from '@expo/vector-icons/Feather';

interface IInputProps extends TextInputProps {}

export const Container = styled.View<{ isFocused: boolean }>`
  border: 1px solid;
  border-color: ${(props) => (props.isFocused ? 'lightblue' : 'black')};
  border-radius: 4px;
  padding: 10px 15px;
  min-width: 80%;
  height: 60px;
  flex-direction: row;
  transition-property: flex-direction;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
  justify-content: flex-start;
  align-items: center;
`;
export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  line-height: 50px;
  margin: 0;
  padding: 2px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
