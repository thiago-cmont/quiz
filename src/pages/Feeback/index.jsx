import React, {useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Difficulties} from '../../constants/questionDifficulties';
import {MAIN_STACK} from '../../constants/routeNames';
import {findObjOnArrWithId} from '../../utils/findCategory';
import * as S from './styles';

const Feedback = () => {
  const navigation = useNavigation();
  const {categories, selectedCategory} = useSelector(state => state.questions);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const category = findObjOnArrWithId(categories, selectedCategory);
  const answersData = category?.difficulties;

  useEffect(() => {
    setRightAnswers(
      answersData[Difficulties?.easy].right +
        answersData[Difficulties?.medium].right +
        answersData[Difficulties?.hard].right,
    );
    setWrongAnswers(
      answersData[Difficulties?.easy].wrong +
        answersData[Difficulties?.medium].wrong +
        answersData[Difficulties?.hard].wrong,
    );
  }, [answersData, selectedCategory]);

  return (
    <>
      {answersData && (
        <S.Container>
          <S.Title>This is your feedback:</S.Title>
          <S.BodyTitle>
            Overall: {rightAnswers} rights and {wrongAnswers} wrongs
          </S.BodyTitle>
          <S.BodyTitle>Details:</S.BodyTitle>
          <S.BodyDescription>
            Easy: {answersData[Difficulties?.easy].right} rights and{' '}
            {answersData[Difficulties?.easy].wrong} wrongs
          </S.BodyDescription>
          <S.BodyDescription>
            Medium: {answersData[Difficulties?.medium].right} rights and{' '}
            {answersData[Difficulties?.medium].wrong} wrongs
          </S.BodyDescription>
          <S.BodyDescription>
            Hard: {answersData[Difficulties?.hard].right} rights and{' '}
            {answersData[Difficulties?.hard].wrong} wrongs
          </S.BodyDescription>
        </S.Container>
      )}
      <S.GoToCategoriesButtonWrapper>
        <S.GoToCategoriesButton
          onPress={() => navigation.navigate(MAIN_STACK.CATEGORIES)}>
          <S.ButtonTitle>Go to categories</S.ButtonTitle>
        </S.GoToCategoriesButton>
      </S.GoToCategoriesButtonWrapper>
    </>
  );
};

export default Feedback;
