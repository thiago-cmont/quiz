import styled from 'styled-components/native';

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#343c58',
})``;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
