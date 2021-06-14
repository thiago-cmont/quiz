import {Dimensions} from 'react-native';

import {s, vs} from 'react-native-size-matters';
import styled from 'styled-components/native';

const dims = Dimensions.get('screen');
export const Container = styled.View`
  flex: 1;
  padding: 15px;
  padding-bottom: 0px;
`;

export const Title = styled.Text`
  color: #2f3d56;
  font-size: 25px;
  text-align: center;
`;

export const BodyTitle = styled.Text`
  color: #2f3d56;
  font-size: 20px;
  margin-top: 15px;
`;

export const BodyDescription = styled.Text`
  color: #2f3d56;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 2px;
`;
export const GoToCategoriesButtonWrapper = styled.View`
  width: ${dims.width}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const GoToCategoriesButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #4d8af0;
  width: ${s(250)}px;
  height: ${vs(65)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ButtonTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  align-self: center;
`;
