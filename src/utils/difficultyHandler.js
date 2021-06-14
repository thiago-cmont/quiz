import {Difficulties} from '../constants/questionDifficulties';

// Set the answers in a row based on:
// If the answer was right -> Increase the amount of right and the wrongs are reseted
// If the answer was wrong -> Increase the amount of wrong and the rights are reseted
export const answersInARowHandler = (category, answerWasRight) => {
  const categoryObjToReturn = {
    answersInARow: category.answersInARow,
  };
  const rightsInARow = category.answersInARow.right;
  const wrongsInARow = category.answersInARow.wrong;
  if (answerWasRight) {
    if (rightsInARow === 0 || rightsInARow === 1) {
      categoryObjToReturn.answersInARow.right += 1;
      categoryObjToReturn.answersInARow.wrong = 0;
    } else {
      categoryObjToReturn.answersInARow.wrong = 0;
    }
  } else if (wrongsInARow === 0 || wrongsInARow === 1) {
    categoryObjToReturn.answersInARow.wrong += 1;
    categoryObjToReturn.answersInARow.right = 0;
  } else {
    categoryObjToReturn.answersInARow.right = 0;
  }

  return categoryObjToReturn;
};

// Set the difficulty of the api request based on:
// If the answer was right:
//  If the right amount was 0 -> Difficulty stay the same
//  If the right amount was 1 -> Difficuylty is increased (Can never go past Hard)
//
//  If the wrong amount was 0 -> Difficulty stay the same
//  If the wrong amount was 1 -> Difficulty is decreased (Can never go past easy)
export const difficultyHandler = (wrongsInARow, rightsInARow, difficulty) => {
  let newDifficulty = difficulty;
  if (wrongsInARow === 2) {
    if (difficulty === Difficulties.hard) {
      newDifficulty = Difficulties.medium;
    } else if (difficulty === Difficulties.medium) {
      newDifficulty = Difficulties.easy;
    }
  } else if (rightsInARow === 2) {
    if (difficulty === Difficulties.medium) {
      newDifficulty = Difficulties.hard;
    } else if (difficulty === Difficulties.easy) {
      newDifficulty = Difficulties.medium;
    }
  }
  return newDifficulty;
};
