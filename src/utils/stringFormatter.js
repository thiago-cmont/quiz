import {decode} from 'html-entities';

// Decode HTML characters
const stringFormatter = string => {
  return decode(string);
};

export default stringFormatter;
