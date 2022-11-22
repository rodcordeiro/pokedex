import React from "react";
import { TouchableNativeFeedback, TouchableNativeFeedbackProps } from "react-native";
import { ButtonElement, Text, Image } from "./styles";

interface IButton extends TouchableNativeFeedbackProps {
  title: string;
  icon: string;
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({
  title,
  icon,
  backgroundColor,
  ...rest
}) => {
  return (
    <ButtonElement
      backgroundColor={backgroundColor}
      {...rest}
      
    >
      <>
        <Text>{title}</Text>
        <Image source={icon} />
      </>
    </ButtonElement>
  );
};

export default React.memo(Button);
