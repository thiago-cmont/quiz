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
  SET_MODAL_VISIBILITY: 'SET_MODAL_VISIBILITY',
  SET_MODAL_ANSWER_FEEDBACK: 'SET_MODAL_ANSWER_FEEDBACK',
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
  modalAnswerVisible: false,
  modalAnswerWasRight: null,
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
        answersInARow: {
          right: 0,
          wrong: 0,
        },
        difficultyBeingAnswered: 'medium',
        answers: [],
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
      const {newUnansweredQuestions} = payload;
      return {
        ...state,
        unansweredQuestions: newUnansweredQuestions,
      };
    }
    case Types.SET_ANSWERS: {
      const {answers, unansweredQuestions} = payload;
      return {
        ...state,
        categories: answers,
        unansweredQuestions,
      };
    }
    case Types.SET_MODAL_VISIBILITY: {
      const {visibility} = payload;
      return {
        ...state,
        modalAnswerVisible: visibility,
      };
    }
    case Types.SET_MODAL_ANSWER_FEEDBACK: {
      const {feedback} = payload;
      return {
        ...state,
        modalAnswerWasRight: feedback,
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

export const setUnansweredQuestions = newUnansweredQuestions => ({
  type: Types.SET_UNANSWERED_QUESTIONS,
  payload: {newUnansweredQuestions},
});

export const asyncSetUnansweredQuestions = newUnansweredQuestionCategoryId => ({
  type: Types.ASYNC_SET_UNANSWERED_QUESTIONS,
  payload: {newUnansweredQuestionCategoryId},
});

export const setAnswers = (answers, unansweredQuestions) => ({
  type: Types.SET_ANSWERS,
  payload: {answers, unansweredQuestions},
});

export const asyncSetAnswers = (answer, category) => ({
  type: Types.ASYNC_SET_ANSWERS,
  payload: {answer, category},
});

export const setSelectedCategory = category => ({
  type: Types.SET_SELECTED_CATEGORY,
  payload: {category},
});

export const setModalVisibility = visibility => ({
  type: Types.SET_MODAL_VISIBILITY,
  payload: {visibility},
});

export const setModalAnswerFeedback = feedback => ({
  type: Types.SET_MODAL_ANSWER_FEEDBACK,
  payload: {feedback},
});
