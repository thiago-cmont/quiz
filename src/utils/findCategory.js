export const findObjOnArrWithId = (arr, obj) => {
  const wantedObjIndex = arr.findIndex(item => item.id === obj.id);
  const wantedObj = arr[wantedObjIndex];
  return wantedObj;
};

export default {findObjOnArrWithId};
