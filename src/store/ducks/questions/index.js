export const Types = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  ASYNC_SET_CATEGORIES: 'ASYNC_SET_CATEGORIES',
  SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY:
    'SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY ',
  ASYNC_SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY:
    'ASYNC_SET_ANSWERED_QUESTIONS_AMOUNT_BY_CATEGORY ',
  SET_UNANSWERED_QUESTIONS: 'SET_UNANSWERED_QUESTIONS',
  ASYNC_SET_UNANSWERED_QUESTIONS: 'ASYNC_SET_UNANSWERED_QUESTIONS',
  SET_ANSWERED_QUESTIONS: 'SET_ANSWERED_QUESTIONS',
  ASYNC_SET_ANSWERED_QUESTIONS: 'ASYNC_SET_ANSWERED_QUESTIONS',
  SET_ANSWERS: 'SET_ANSWERS',
  ASYNC_SET_ANSWERS: 'ASYNC_SET_ANSWERS',
};

const INITIAL_STATE = {
  categories: [],
  answeredQuestionsAmountByCategory: [],
  unansweredQuestions: [],
  answeredQuestions: [],
  answers: [],
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.SHOW_ALERT:
      return {
        alertProps: payload.alertProps,
        alertType: payload.alertType,
      };
    case Types.HIDE_ALERT:
      return INITIAL_STATE;
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

export const setUnansweredQuestions = unansweredQuestions => ({
  type: Types.SET_UNANSWERED_QUESTIONS,
  payload: {unansweredQuestions},
});

export const asyncSetUnansweredQuestions = (category, unansweredQuestion) => ({
  type: Types.SET_UNANSWERED_QUESTIONS,
  payload: {category, unansweredQuestion},
});

export const setAnsweredQuestions = answeredQuestions => ({
  type: Types.SET_ANSWERED_QUESTIONS,
  payload: {answeredQuestions},
});

export const asyncSetAnsweredQuestions = (category, answeredQuestion) => ({
  type: Types.SET_ANSWERED_QUESTIONS,
  payload: {category, answeredQuestion},
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
