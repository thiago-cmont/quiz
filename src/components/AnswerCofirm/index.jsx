import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {MAIN_STACK} from '../../constants/routeNames';
import {
  asyncSetAnswers,
  asyncSetUnansweredQuestions,
  setModalAnswerFeedback,
  setModalVisibility,
} from '../../store/ducks/questions';
import {findObjOnArrWithId} from '../../utils/findCategory';
import * as S from './styles';

export const AnswerConfirm = ({answer, onPressCallback}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {selectedCategory, categories} = useSelector(state => state.questions);

  const answerConfirmation = () => {
    // Dispatch the answer to the state
    dispatch(asyncSetAnswers(answer, selectedCategory));
    setAnswered(true);
  };

  const goToNextQuestion = () => {
    // Dispatch the action of downloading another question, but if the category
    // already has 10 answered questions, show feedback instead
    const category = findObjOnArrWithId(categories, selectedCategory);
    if (category.answeredAmount < 10) {
      dispatch(asyncSetUnansweredQuestions(selectedCategory.id));
      dispatch(setModalAnswerFeedback(null));
      dispatch(setModalVisibility(false));
      setAnswered(false);
      onPressCallback();
    } else {
      dispatch(setModalVisibility(false));
      navigation.navigate(MAIN_STACK.FEEDBACK);
    }
  };
  const [answered, setAnswered] = useState(false);

  return (
    <S.ConfirmWrapper>
      <S.AnswerButton
        onPress={() => (!answered ? answerConfirmation() : goToNextQuestion())}>
        <S.Title>{answered ? 'Next' : 'Confirm'}</S.Title>
        {answered && <S.ArrowIcon />}
      </S.AnswerButton>
    </S.ConfirmWrapper>
  );
};

export default AnswerConfirm;
