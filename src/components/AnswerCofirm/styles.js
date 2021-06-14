import {Dimensions} from 'react-native';

import {s, vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const dims = Dimensions.get('screen');

export const ConfirmWrapper = styled.View`
  width: ${dims.width}px;
  height: ${vs(100)}px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const AnswerButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #4d8af0;
  width: ${s(250)}px;
  height: ${vs(65)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  align-self: center;
`;
export const ArrowIcon = styled(Icon).attrs({
  size: 25,
  name: 'arrow-right',
})`
  color: #fff;
  padding-left: 15px;
  padding-top: 5px;
`;
