import styled from 'styled-components/native';

import ButtonList from '../../components/ButtonList';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  padding-bottom: 0px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  color: #2f3d56;
  font-size: 20px;
`;

export const BodyWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const QuestionDescription = styled.Text`
  color: #000000;
  font-size: 18px;
  text-align: left;
  margin-bottom: 20px;
`;

export const QuestionButtonList = styled(ButtonList).attrs(props => ({
  textStyle: {
    color: '#000',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'left',
  },
  listStyle: {
    paddingBottom: props.hasAnswer ? 100 : 0,
  },
}))``;
