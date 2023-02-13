import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

interface iTooltipProps {
  onPress: () => void;
  iconStyle?: StyleProp<any>;
}

export const ToolTip = ({ onPress, iconStyle }: iTooltipProps) => {
  return (
    //add modal
    <TouchableOpacity onPress={onPress}>
      <SimpleLineIcons name="question" style={[...iconStyle]} />
    </TouchableOpacity>
  );
};
