import React, { ReactElement } from 'react';
import { TouchableOpacity, View } from 'react-native';
import RNModal from 'react-native-modal';
import { Text, styles } from './style';
import { SimpleLineIcons } from '@expo/vector-icons';

interface iTooltipProps {
  text: string;
  children: ReactElement;
  color?: string;
}

export const ToolTip = ({ text, color, children }: iTooltipProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <>
      <RNModal isVisible={visible}>
        <View style={styles.modalContainer}>
          {children}
          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: color ?? 'gray' }]}
            onPress={() => setVisible(!visible)}>
            <Text style={[{ paddingVertical: 10, paddingHorizontal: 30 }]}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </RNModal>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 45,
          }}>
          <SimpleLineIcons
            name="question"
            style={{
              paddingLeft: 15,
              paddingRight: 5,
              paddingTop: 2.5,
              fontSize: 10,
            }}
          />
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
