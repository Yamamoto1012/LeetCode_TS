import { describe, it, expect } from 'vitest';
import { twoSum } from '../src/easy/1-two-sum';

describe('twoSum', () => {
  it('example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
});