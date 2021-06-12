import React from 'react';

import * as S from './styles';

const DifficultyStars = question => {
  return (
    <S.StarsWrapper>
      <S.SingleStar name="star" disabled={false} />
      <S.SingleStar name="star" disabled={false} />
      <S.SingleStar name="star" disabled={false} />
    </S.StarsWrapper>
  );
};

export default DifficultyStars;
