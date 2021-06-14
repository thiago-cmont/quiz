import React from 'react';

import UppercaseFunction from '../../utils/firstLetterToUppercase';
import DifficultyStars from '../DifficultyStars';
import * as S from './styles';

const DifficultyBadge = ({question}) => {
  return (
    <S.BadgeWrapper>
      <DifficultyStars questionDifficulty={question.difficulty} />
      <S.BadgeText>{UppercaseFunction(question.difficulty)}</S.BadgeText>
    </S.BadgeWrapper>
  );
};

export default DifficultyBadge;
