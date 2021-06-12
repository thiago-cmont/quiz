import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import ButtonList from '../../components/ButtonList';
import {MAIN_STACK} from '../../constants/routeNames';
import {
  asyncSetUnansweredQuestions,
  setSelectedCategory,
} from '../../store/ducks/questions';
import * as S from './styles';

const Categories = () => {
  const {categories, selectedCategory} = useSelector(state => state.questions);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categoryCallback = category => {
    if (category.id !== selectedCategory?.id) {
      const newSelectedCategory = {
        id: category.id,
        name: category.name,
      };
      dispatch(setSelectedCategory(newSelectedCategory));
    }
    if (category.answeredAmount < 10) {
      dispatch(asyncSetUnansweredQuestions(category.id));
    }
    navigation.navigate(MAIN_STACK.QUESTIONS);
  };
  return (
    <S.Container style={{flex: 1}}>
      <S.Title>Categories</S.Title>
      {categories && (
        <ButtonList
          dataToList={categories}
          onPressCallback={categoryCallback}
        />
      )}
    </S.Container>
  );
};

export default Categories;
