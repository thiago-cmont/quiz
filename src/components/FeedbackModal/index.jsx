import React from 'react';

import {useSelector} from 'react-redux';

import * as S from './styles';

const FeedbackModal = () => {
  const {modalAnswerVisible, modalAnswerWasRight} = useSelector(
    state => state.questions,
  );

  return (
    <>
      {modalAnswerVisible && (
        <S.FeedbackModal animationType="slide" transparent>
          <S.FeedbackWrapper answerWasRight={modalAnswerWasRight}>
            <S.FeedbackIconView answerWasRight={modalAnswerWasRight}>
              <S.FeedbackIcon answerWasRight={modalAnswerWasRight} />
            </S.FeedbackIconView>
            <S.FeedbackText>
              {modalAnswerWasRight ? 'Right answer!' : 'Wrong answer!'}
            </S.FeedbackText>
          </S.FeedbackWrapper>
        </S.FeedbackModal>
      )}
    </>
  );
};

export default FeedbackModal;
