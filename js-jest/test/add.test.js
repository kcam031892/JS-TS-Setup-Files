const { add } = require('./../add');
it('should return sum of 2 numbers', () => {
  const actual = add(10, 20);
  const expected = 30;
  expect(actual).toBe(expected);
});
