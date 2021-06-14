import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #f6f6f6;
  border-width: ${({pressed}) => (pressed ? '3px' : '1px')};
  border-color: ${({pressed}) => (pressed ? '#4d8af0' : '#b0b0b0')};
  padding: 10px;
  align-items: center;
  padding: 10px;
  elevation: 6;
  width: ${s(280)}px;
  margin-bottom: 15px;
`;

export const ButtonTitle = styled.Text`
  color: #748198;
  font-size: 18px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const List = styled.FlatList.attrs(props => ({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: props.hasAnswer ? 100 : 0,
  },
}))`
  flex-grow: 1;
  width: 100%;
  flex: 1;
`;
