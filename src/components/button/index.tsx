import React from "react";
import styled from "styled-components/native";

interface IButtonStyles {
  background: string;
}

const ButtonElement = styled.TouchableOpacity<IButtonStyles>`
  border-radius: 4px;
  padding: 10px;
  width: 80%;
  height: 100px;
  background-color: ${(props) =>
    props.background ? props.background : props.theme.color.button};
  overflow: hidden;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.color.text};
  font-size: 25px;
  line-height: 30px;
  font-weight: light;
  width: 80%;
`;

const Image = styled.Image`
  position: absolute;
  right: -60px;
  top: -60px;
  transform: rotate(-45deg);
  opacity: 0.25;
`;

interface IButton {
  title: string;
  icon: string;
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({ title, icon, backgroundColor }) => {
  return (
    <ButtonElement background={backgroundColor}>
      <Text>{title}</Text>
      <Image source={icon} />
      {/* {icon && <Image source={icon} />} */}
    </ButtonElement>
  );
};

export default React.memo(Button);
