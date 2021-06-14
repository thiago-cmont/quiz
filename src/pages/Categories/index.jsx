import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import ButtonList from '../../components/ButtonList';
import Loading from '../../components/Loading';
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
    // Controls the action of the ButtonList Component
    if (category.id !== selectedCategory?.id) {
      // If didnt select the already chosen category, pushes the new one into the state
      const newSelectedCategory = {
        id: category.id,
        name: category.name,
      };
      dispatch(setSelectedCategory(newSelectedCategory));
    }
    // Checks if should go to questions or feedback
    if (category.answeredAmount < 10) {
      dispatch(asyncSetUnansweredQuestions(category.id));
      navigation.navigate(MAIN_STACK.QUESTIONS);
    } else {
      navigation.navigate(MAIN_STACK.FEEDBACK);
    }
  };

  return (
    <S.Container style={{flex: 1}}>
      <S.Title>Categories</S.Title>
      {categories ? (
        <ButtonList
          dataToList={categories}
          onPressCallback={categoryCallback}
          disableButtonPress
          keyToDisplay="name"
        />
      ) : (
        <Loading />
      )}
    </S.Container>
  );
};

export default Categories;
