import React from 'react';

import DifficultyStars from '../DifficultyStars';
import * as S from './styles';

const DifficultyBadge = ({question}) => {
  return (
    <S.BadgeWrapper>
      <DifficultyStars />
      <S.BadgeText>Médio</S.BadgeText>
    </S.BadgeWrapper>
  );
};

export default DifficultyBadge;
