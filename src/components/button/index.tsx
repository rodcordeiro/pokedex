import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
  TouchableNativeFeedbackProps,
} from 'react-native';
import { ButtonElement, Text, Image } from './styles';

interface IButton extends TouchableNativeFeedbackProps {
  title: string;
  icon: ImageSourcePropType | string;
  iconStyle?: StyleProp<ImageStyle>;
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({
  title,
  icon,
  iconStyle,
  backgroundColor,
  ...rest
}) => (
  <ButtonElement backgroundColor={backgroundColor} {...rest}>
    <>
      <Text>{title}</Text>
      {/* @ts-ignore */}
      <Image source={icon} style={iconStyle} />
    </>
  </ButtonElement>
);

export default React.memo(Button);
