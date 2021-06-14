import React from 'react';

import * as S from './styles';

const DifficultyStars = ({questionDifficulty}) => {
  return (
    <S.StarsWrapper>
      <S.SingleStar name="star" disabled={false} />
      <S.SingleStar name="star" disabled={questionDifficulty === 'easy'} />
      <S.SingleStar
        name="star"
        disabled={
          questionDifficulty === 'easy' || questionDifficulty === 'medium'
        }
      />
    </S.StarsWrapper>
  );
};

export default DifficultyStars;
