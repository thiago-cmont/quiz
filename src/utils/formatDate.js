// Format date to DD/MM/YYYY
function formattedDate() {
  const date = new Date();
  const timeFormatted = date.toString().substr(16, 5);
  const day = date.getDate().toString();
  const dayFormatted = day.length === 1 ? `0${day}` : day;
  const month = (date.getMonth() + 1).toString();
  const monthFormatted = month.length === 1 ? `0${month}` : month;
  const yearFormatted = date.getFullYear();
  const fullDateFormatted = `${dayFormatted}/${monthFormatted}/${yearFormatted}`;
  const answerTimeObj = {
    time: timeFormatted,
    date: fullDateFormatted,
  };
  return answerTimeObj;
}

export default formattedDate;
