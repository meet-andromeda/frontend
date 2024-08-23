import { expect } from 'chai';
import stringToSnakeCase from './string-to-snake-case';

describe('stringToSnakeCase', () => {
  const texts = ['this-Is_a-test', 'This`Is,a~test', 'ThisIsATest'];

  it('should be a function', () => {
    expect(typeof stringToSnakeCase).to.equal('function');
  });

  it('[SUCCESS] should return a string in snake case format', () => {
    const expectedResult = 'this_is_a_test';

    texts.forEach((text) => {
      expect(stringToSnakeCase(text)).to.equal(expectedResult);
    });
  });
});
