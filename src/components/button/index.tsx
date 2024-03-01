import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  TouchableNativeFeedbackProps,
  TextStyle,
} from 'react-native';
import { ButtonElement, Text, Image } from './styles';

interface IButton extends TouchableNativeFeedbackProps {
  title: string;
  icon: ImageSourcePropType | string;
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({
  title,
  icon,
  iconStyle,
  textStyle,
  backgroundColor = undefined,
  ...rest
}) => (
  <ButtonElement backgroundColor={backgroundColor} {...rest}>
    <>
      <Text style={textStyle}>{title}</Text>
      {/* @ts-ignore */}
      <Image source={icon} style={iconStyle} />
    </>
  </ButtonElement>
);

export default React.memo(Button);
