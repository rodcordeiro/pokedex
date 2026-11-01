import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.color.background};
  padding: 0px;
  align-items: center;
  width: 100%;
`;
export const Title = styled.Text`
  margin: 10px 10px 10px 60px;
  color: ${(props) => props.theme.color.title};
  font-size: 40px;
  line-height: 40px;
  font-weight: bold;
  text-align: left;
  width: 90%;
`;

export const Subtitle = styled.Text`
  margin: 10px 0px 12px -10px;
  color: ${(props) => props.theme.color.subtitle};
  font-size: 20px;
  line-height: 25px;
  font-weight: 300;
  text-align: left;
  width: 70%;
`;
export const Line = styled.View`
  margin-top: 32px;
`;
