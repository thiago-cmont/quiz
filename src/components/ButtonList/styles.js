import {s} from 'react-native-size-matters';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #f6f6f6;
  border: 1px solid #b5bfd4;
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

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  flex-grow: 1;
  width: 100%;
  flex: 1;
`;
