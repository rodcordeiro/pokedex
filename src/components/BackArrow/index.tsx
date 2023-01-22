import React from 'react';
import Icon from '@expo/vector-icons/Feather';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface IBackArrowProps {
  origin?: string;
}
const BackArrow = ({ origin }: IBackArrowProps) => {
  const navigation = useNavigation();

  const navigationHandler = () => {
    if (origin) {
      // @ts-ignore
      navigation.navigate(origin);
      return;
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }
    // @ts-ignore
    navigation.navigate('HomeScreen');
  };
  return navigation.canGoBack() ? (
    <BorderlessButton onPress={navigationHandler} style={styles.backButton}>
      <Icon name="arrow-left" size={24} color="#f4f4f4" />
    </BorderlessButton>
  ) : (
    <View />
  );
};

export default React.memo(BackArrow);

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 20,
  },
});
