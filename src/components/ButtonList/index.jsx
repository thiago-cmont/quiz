import React, {useState} from 'react';

import stringFormatter from '../../utils/stringFormatter';
import * as S from './styles';

const ButtonList = ({
  dataToList,
  onPressCallback,
  disableButtonPress,
  textStyle,
  hasAnswer,
  keyToDisplay,
}) => {
  const [buttonPressed, setButtonPressed] = useState();

  const onPress = obj => {
    // Set the outline of the pressed button and calls the function of the parent
    setButtonPressed(obj.id);
    onPressCallback(obj);
  };

  const Item = ({obj}) => (
    <S.ButtonWrapper
      hasAnswer
      onPress={() => onPress(obj)}
      // DisableButtonPress is used to disable outline on the categories page
      pressed={buttonPressed === obj.id && !disableButtonPress}>
      <S.ButtonTitle style={textStyle}>
        {stringFormatter(obj[keyToDisplay])}
      </S.ButtonTitle>
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
        hasAnswer={hasAnswer}
      />
    </S.Container>
  );
};

export default ButtonList;
