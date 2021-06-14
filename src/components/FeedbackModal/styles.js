import {Dimensions} from 'react-native';

import {s, vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const dims = Dimensions.get('screen');
export const FeedbackModal = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  height: ${dims.height - vs(100)}px;
  width: ${dims.width}px;
  justify-content: center;
  align-items: center;
`;

export const FeedbackWrapper = styled.View`
  background-color: #fff;
  border-radius: 10px;
  border-width: 3px;
  border-color: ${({answerWasRight}) =>
    answerWasRight ? '#32cb82' : '#ff4f4f'};
  width: ${s(240)}px;
  height: ${vs(210)}px;
  align-items: center;
  justify-content: center;
`;

export const FeedbackIconView = styled.View`
  border-radius: 100px;
  background-color: ${({answerWasRight}) =>
    answerWasRight ? '#32cb82' : '#ff4f4f'};
  justify-content: center;
  align-items: center;
  width: ${s(60)}px;
  height: ${s(60)}px;
`;

export const FeedbackIcon = styled(Icon).attrs(props => ({
  name: props.answerWasRight ? 'check' : 'close',
  size: 30,
}))`
  color: #fff;
`;

export const FeedbackText = styled.Text`
  color: #343c58;
  font-size: 19px;
  font-weight: bold;
  padding-top: 10px;
`;
