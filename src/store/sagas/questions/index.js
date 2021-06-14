import _ from 'lodash';
import reactotron from 'reactotron-react-native';
import {put, takeEvery, call, select} from 'redux-saga/effects';

import baseRequest from '../../../config/api/requestHandler';
import {
  difficultyHandler,
  answersInARowHandler,
} from '../../../utils/difficultyHandler';
import {
  Types as questionTypes,
  setAnswers,
  setCategories,
  setUnansweredQuestions,
  setModalVisibility,
  setModalAnswerFeedback,
} from '../../ducks/questions';

// Set the array of categories
function* asyncSetCategories() {
  try {
    const downloadedCategories = yield call(baseRequest, true);
    yield put(setCategories(downloadedCategories.trivia_categories));
  } catch (error) {
    reactotron.log('err on download categories', error.message);
  }
}

// Set the unanswered questions, 1 per category at most
function* asyncSetUnansweredQuestions({payload}) {
  const {newUnansweredQuestionCategoryId} = payload;

  const {unansweredQuestions, categories} = yield select(
    state => state.questions,
  );

  const categoryIndex = categories.findIndex(
    arr => arr.id === newUnansweredQuestionCategoryId,
  );
  if (categories[categoryIndex].answeredAmount <= 10) {
    try {
      const newDownloadedQuestion = yield call(
        baseRequest,
        false,
        newUnansweredQuestionCategoryId,
        categories[categoryIndex].difficultyBeingAnswered,
      );

      // Will be used to modify the state
      let newUnansweredQuestions = [];
      // Grab the index of the array based on the category of the question
      const index = unansweredQuestions.findIndex(
        item => item.id === newUnansweredQuestionCategoryId,
      );
      // There's no question of that category
      if (index === -1) {
        const newCategoryUnanswaredQuestion = {
          id: newUnansweredQuestionCategoryId,
          unansweredQuestions: [newDownloadedQuestion.results[0]],
        };
        newUnansweredQuestions = [
          ...unansweredQuestions,
          newCategoryUnanswaredQuestion,
        ];
      } else {
        newUnansweredQuestions = unansweredQuestions;
      }

      yield put(setUnansweredQuestions(newUnansweredQuestions));
    } catch (error) {
      reactotron.log('err on download questions', error.message);
    }
  }
}

// Set the answers
function* asyncSetAnswers({payload}) {
  const {answer, category} = payload;
  const {categories, unansweredQuestions} = yield select(
    state => state.questions,
  );
  // Clone of the categorries
  const categoriesToModify = _.cloneDeep(categories);
  // Grab the index of the selectedCategory on the categories array
  const categoryToModifyIndex = categoriesToModify.findIndex(
    arr => arr.id === category.id,
  );
  // Clone the category to modify
  const categoryToModify = _.cloneDeep(
    categoriesToModify[categoryToModifyIndex],
  );
  // Increase the answered questions amount
  categoryToModify.answeredAmount += 1;
  // Push the new answer to the category answers
  categoryToModify.answers.push(answer);
  let newDifficulties = {};
  // With the bool wasTheAnswerRight will increase the right or wrong answered amount on the
  // category and will check with the answersInARowHandler and the difficultyHandler functions
  // if the difficulty should be changed and if it should, to wich one
  if (answer.wasTheAnswerRight) {
    categoryToModify.difficulties[answer.difficulty].right += 1;
    newDifficulties = answersInARowHandler(categoryToModify, true);
    yield put(setModalAnswerFeedback(true));
  } else {
    categoryToModify.difficulties[answer.difficulty].wrong += 1;
    yield put(setModalAnswerFeedback(false));
    newDifficulties = answersInARowHandler(categoryToModify, false);
  }
  // Set the feedback modal visible
  yield put(setModalVisibility(true));
  // Set the new answers in a row state to further use
  categoryToModify.answersInARow = newDifficulties.answersInARow;
  // Checks if the diffculty should change
  categoryToModify.difficultyBeingAnswered = difficultyHandler(
    categoryToModify.answersInARow.wrong,
    categoryToModify.answersInARow.right,
    categoryToModify.difficultyBeingAnswered,
  );
  categoriesToModify[categoryToModifyIndex] = categoryToModify;
  // Clone the unansweredQuestions array
  const unansweredQuestionsToModify = _.cloneDeep(unansweredQuestions);
  // Gets the index of the answered question
  const unansweredQuestionsToModifyIndex =
    unansweredQuestionsToModify.findIndex(arr => arr.id === category.id);
  // Take the answered question out of the unanswered array
  unansweredQuestionsToModify.splice(unansweredQuestionsToModifyIndex, 1);
  // Push the answered question to the answers array
  yield put(setAnswers(categoriesToModify, unansweredQuestionsToModify));
}

const sagas = [
  takeEvery(questionTypes.ASYNC_SET_CATEGORIES, asyncSetCategories),
  takeEvery(
    questionTypes.ASYNC_SET_UNANSWERED_QUESTIONS,
    asyncSetUnansweredQuestions,
  ),
  takeEvery(questionTypes.ASYNC_SET_ANSWERS, asyncSetAnswers),
];

export default sagas;
