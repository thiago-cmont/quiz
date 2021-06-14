import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import AnswerConfirm from '../../components/AnswerCofirm';
import DifficultyBadge from '../../components/DifficultyBadge';
import FeedbackModal from '../../components/FeedbackModal';
import Loading from '../../components/Loading';
import {findObjOnArrWithId} from '../../utils/findCategory';
import formattedDate from '../../utils/formatDate';
import shuffle from '../../utils/shuffleQuestions';
import stringFormatter from '../../utils/stringFormatter';
import * as S from './styles';

const Question = () => {
  const {categories, selectedCategory, unansweredQuestions} = useSelector(
    state => state.questions,
  );
  const [category, setCategory] = useState();
  const [questions, setQuestions] = useState();
  const [questionBeingAnswered, setQuestionBeingAnswered] = useState();
  const [scrambledAnswers, setScrambledAnswers] = useState();
  const [answer, setAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [questionDifficulty, setQuestionDifficulty] = useState();
  const [questionSetupFinished, SetQuestSetupFinished] = useState(false);

  useEffect(() => {
    // Set the category to display a question of
    if (categories && selectedCategory && !questionSetupFinished) {
      setCategory(findObjOnArrWithId(categories, selectedCategory));
    }
  }, [categories, selectedCategory, questionSetupFinished]);

  useEffect(() => {
    // Set the question to display and grab the correct answer for future use
    if ((unansweredQuestions, selectedCategory && !questionSetupFinished)) {
      setQuestions(findObjOnArrWithId(unansweredQuestions, selectedCategory));
      setQuestionBeingAnswered(questions?.unansweredQuestions[0]);
      setCorrectAnswer(questions?.unansweredQuestions[0].correct_answer);
    }
  }, [unansweredQuestions, selectedCategory, questions, questionSetupFinished]);

  useEffect(() => {
    // Grab the difficulty of the question for future use and scramble the order of the answers
    if (questionBeingAnswered) {
      setQuestionDifficulty(questionBeingAnswered.difficulty);
      setScrambledAnswers(
        shuffle(
          questionBeingAnswered?.incorrect_answers,
          questionBeingAnswered?.correct_answer,
        ),
      );
      SetQuestSetupFinished(true);
    }
  }, [questionBeingAnswered]);

  // Control the action of the AnswerConfirm component IF THERE IS NO ANSWER and
  // create the answer object
  const questionCallback = question => {
    const answerTime = formattedDate();
    question.date = answerTime.date;
    question.time = answerTime.time;
    question.correctAnswer = correctAnswer;
    question.difficulty = questionDifficulty;
    setAnswer(question);
  };

  // Control the action of the AnswerConfirm component IF THER IS AN ANSWER
  const answerCallback = () => {
    SetQuestSetupFinished(false);
    setAnswer(null);
  };

  return (
    <>
      {questionBeingAnswered || questionSetupFinished ? (
        <S.Container>
          <S.HeaderWrapper>
            <S.Title>Question {category?.answeredAmount + 1}</S.Title>
            <DifficultyBadge question={questionBeingAnswered} />
          </S.HeaderWrapper>
          <S.BodyWrapper>
            <S.QuestionDescription>
              {stringFormatter(questionBeingAnswered?.question)}
            </S.QuestionDescription>
            {scrambledAnswers && (
              <S.QuestionButtonList
                dataToList={scrambledAnswers}
                onPressCallback={questionCallback}
                hasAnswer={answer}
                keyToDisplay="answer"
                disableButtonPress={answer === null}
              />
            )}
          </S.BodyWrapper>
          {answer && (
            <AnswerConfirm
              answer={answer}
              onPressCallback={() => answerCallback()}
            />
          )}
        </S.Container>
      ) : (
        <Loading />
      )}
      <FeedbackModal />
    </>
  );
};

export default Question;
