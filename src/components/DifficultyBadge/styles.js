import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const BadgeWrapper = styled.View`
  border-radius: 50px;
  background-color: #d5d8de;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  width: ${s(120)}px;
`;

export const BadgeText = styled.Text`
  color: #2f3d56;
  font-size: 14px;
`;
