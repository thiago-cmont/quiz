export const firstLetterToUppercase = word => {
  return word.substr(0, 1).toUpperCase() + word.slice(1);
};

export default firstLetterToUppercase;
