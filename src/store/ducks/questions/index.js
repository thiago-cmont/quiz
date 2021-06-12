import _ from 'lodash';

export const Types = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  ASYNC_SET_CATEGORIES: 'ASYNC_SET_CATEGORIES',
  SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY:
    'SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY ',
  ASYNC_SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY:
    'ASYNC_SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY ',
  SET_UNANSWERED_QUESTIONS: 'SET_UNANSWERED_QUESTIONS',
  ASYNC_SET_UNANSWERED_QUESTIONS: 'ASYNC_SET_UNANSWERED_QUESTIONS',
  SET_ANSWERS: 'SET_ANSWERS',
  ASYNC_SET_ANSWERS: 'ASYNC_SET_ANSWERS',
  SET_SELECTED_CATEGORY: 'SET_SELECTED_CATEGORY',
};

const INITIAL_STATE = {
  categories: [],
  answeredAmount: 0,
  difficulties: {
    easy: {
      right: 0,
      wrong: 0,
    },
    medium: {
      right: 0,
      wrong: 0,
    },
    hard: {
      right: 0,
      wrong: 0,
    },
  },
  selectedCategory: null,
  unansweredQuestions: [],
  answers: [],
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.SET_CATEGORIES: {
      const {categories} = payload;
      const difficulties = _.cloneDeep(state.difficulties);
      const {answeredAmount} = state;
      const newCategories = categories.map(arr => ({
        ...arr,
        difficulties,
        answeredAmount,
      }));
      return {
        ...state,
        categories: newCategories,
      };
    }
    case Types.SET_SELECTED_CATEGORY: {
      const {category} = payload;
      return {
        ...state,
        selectedCategory: category,
      };
    }
    case Types.SET_UNANSWERED_QUESTIONS: {
      const {newUnansweredQuestion} = payload;
      return {
        ...state,
        unansweredQuestions: [
          ...state.unansweredQuestions,
          newUnansweredQuestion,
        ],
      };
    }
    default:
      return state;
  }
}

export const setCategories = categories => ({
  type: Types.SET_CATEGORIES,
  payload: {categories},
});

export const asyncSetCategories = () => ({
  type: Types.ASYNC_SET_CATEGORIES,
});

export const setAnsweredQuestionsAmountByCategory =
  answeredQuestionsAmountByCategory => ({
    type: Types.SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY,
    payload: {answeredQuestionsAmountByCategory},
  });

export const asyncSetAnsweredQuestionsAmountByCategory = category => ({
  type: Types.ASYNC_SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY,
  payload: {category},
});

export const setUnansweredQuestions = newUnansweredQuestion => ({
  type: Types.SET_UNANSWERED_QUESTIONS,
  payload: {newUnansweredQuestion},
});

export const asyncSetUnansweredQuestions = newUnansweredQuestion => ({
  type: Types.ASYNC_SET_UNANSWERED_QUESTIONS,
  payload: {newUnansweredQuestion},
});

export const setAnswers = answers => ({
  type: Types.SET_ANSWERS,
  payload: {answers},
});

export const asyncSetAnswers = (
  answer,
  difficulty,
  rightAnswer,
  date,
  answerWasRight,
) => ({
  type: Types.SET_ANSWERS,
  payload: {answer, difficulty, rightAnswer, date, answerWasRight},
});

export const setSelectedCategory = category => ({
  type: Types.SET_SELECTED_CATEGORY,
  payload: {category},
});
