import api from './api';

const baseRequest = async (
  isCategories,
  category,
  questionsAmount,
  difficulty,
) => {
  if (isCategories) {
    const res = await api.get('_category.php');
    return res.data;
  }

  const res = await api.get(
    `.php?amount=${questionsAmount}&category=${category}&difficulty=${difficulty}&type=multiple`,
  );
  return res.data;
};

export default baseRequest;
