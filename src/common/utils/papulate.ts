export const papulate = (value: number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const values = ['one', 'many', 'other'];

  if (value === 0) {
    return 'other';
  }

  const newNumber = Math.abs(value);
  const c =
    newNumber % 100 > 4 && newNumber % 100 < 20
      ? 2
      : cases[newNumber % 10 < 5 ? newNumber % 10 : 5];
  return values[c];
};
