// Scramble the array into a random order
function shuffle(incorrectAnswers, correctAnswer) {
  const correct = correctAnswer;
  const answersArray = [...incorrectAnswers, correctAnswer];
  let currentIndex = answersArray.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [answersArray[currentIndex], answersArray[randomIndex]] = [
      answersArray[randomIndex],
      answersArray[currentIndex],
    ];
  }
  const rightAnswerIndex = answersArray.indexOf(correct);
  const answersArrayObject = answersArray.map(arr => ({
    answer: arr,
    wasTheAnswerRight: false,
    id: answersArray.indexOf(arr),
  }));
  answersArrayObject[rightAnswerIndex].wasTheAnswerRight = true;
  return answersArrayObject;
}
export default shuffle;
