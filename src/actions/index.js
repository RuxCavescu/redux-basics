export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr, // adding the number we want to increment by
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
