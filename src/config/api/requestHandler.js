import api from './api';

const baseRequest = async (isCategories, category, difficulty) => {
  if (isCategories) {
    const res = await api.get('api_category.php');
    return res.data;
  }
  const res = await api.get(
    `api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`,
  );

  return res.data;
};

export default baseRequest;
