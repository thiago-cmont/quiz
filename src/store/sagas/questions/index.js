import reactotron from 'reactotron-react-native';
import {put, takeEvery, call, select} from 'redux-saga/effects';

import baseRequest from '../../../config/api/requestHandler';
import {
  Types as questionTypes,
  setAnsweredQuestions,
  setAnsweredQuestionsAmountByCategory,
  setAnswers,
  setCategories,
  setUnansweredQuestions,
} from '../../ducks/questions';

function* asyncSetCategories() {
  try {
    const downloadedCategories = yield call(baseRequest, true);
    yield put(setCategories(downloadedCategories.trivia_categories));
  } catch (error) {
    reactotron.log('err on download categories', error.message);
  }
}

function* asyncSetUnansweredQuestions({payload}) {
  const {newUnansweredQuestion} = payload;
  try {
    const newDownloadedQuestion = yield call(
      baseRequest,
      false,
      newUnansweredQuestion,
      'medium',
    );
    yield put(setUnansweredQuestions(newDownloadedQuestion.results));
  } catch (error) {
    reactotron.log('err on download categories', error.message);
  }
}
const sagas = [
  takeEvery(questionTypes.ASYNC_SET_CATEGORIES, asyncSetCategories),
  takeEvery(
    questionTypes.ASYNC_SET_UNANSWERED_QUESTIONS,
    asyncSetUnansweredQuestions,
  ),
];

export default sagas;
