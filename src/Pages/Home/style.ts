import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
  padding: 5px 10px;
  align-items: center;
`;
export const Title = styled.Text`
  margin: 50px 10px;
  color: #333;
  font-size: 40px;
  line-height: 40px;
  font-weight: bold;
  text-align: left;
  width: 90%;
`;
export const Line = styled.View`
  margin-top: 32px;
`;
