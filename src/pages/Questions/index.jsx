import React from 'react';

import {useSelector} from 'react-redux';

import DifficultyBadge from '../../components/DifficultyBadge';
import {findObjOnArrWithId} from '../../utils/findCategory';
import * as S from './styles';

const Question = () => {
  const {categories, selectedCategory} = useSelector(state => state.questions);
  const category = findObjOnArrWithId(categories, selectedCategory);
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.Title>Question {category.answeredAmount + 1}</S.Title>
        <DifficultyBadge />
      </S.HeaderWrapper>
    </S.Container>
  );
};

export default Question;
