import styled from 'styled-components/native';

interface IButtonStyles {
  backgroundColor: string;
}

export const ButtonElement = styled.TouchableOpacity<IButtonStyles>`
  border-radius: 4px;
  padding: 10px;
  width: 80%;
  height: 100px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.color.button};
  overflow: hidden;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.color.text};
  font-size: 25px;
  line-height: 30px;
  font-weight: 100;
  width: 80%;
`;

export const Image = styled.Image`
  position: absolute;
  right: -60px;
  top: -60px;
  transform: rotate(-45deg);
  opacity: 0.25;
`;
