import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  padding-bottom: 0px;
`;

export const Title = styled.Text`
  color: #2f3d56;
  font-size: 25px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#343c58',
})``;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
