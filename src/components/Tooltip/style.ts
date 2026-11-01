import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Text = styled.Text`
  font-family: Quicksand_700Bold;
`;

export const styles = StyleSheet.create({
  modalContainer: {
    height: 250,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    left: 130,
    borderRadius: 5,
  },
});
