import { add } from '@utils/add';

describe('add function', () => {
  it('should return the sum of 2 numbers', () => {
    const actual = add(20, 30);
    const expected = 50;
    expect(actual).toBe(expected);
  });
});
