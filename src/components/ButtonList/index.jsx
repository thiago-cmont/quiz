import React from 'react';

import * as S from './styles';

const ButtonList = ({dataToList, onPressCallback}) => {
  const onPress = obj => {
    onPressCallback(obj);
  };
  const Item = ({obj}) => (
    <S.ButtonWrapper onPress={() => onPress(obj)}>
      <S.ButtonTitle>{obj.name}</S.ButtonTitle>
    </S.ButtonWrapper>
  );
  const renderItem = ({item}) => <Item obj={item} />;
  return (
    <S.Container>
      <S.List
        data={dataToList}
        renderItem={renderItem}
        key={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
};

export default ButtonList;
