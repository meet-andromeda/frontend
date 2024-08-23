import { expect } from 'chai';
import stringToKebabCase from './string-to-kebab-case';

describe('stringToKebabCase', () => {
  const texts = ['this-Is_a-test', 'This`Is,a~test', 'ThisIsATest'];

  it('should be a function', () => {
    expect(typeof stringToKebabCase).to.equal('function');
  });

  it('[SUCCESS] should return a string in kebab case format', () => {
    const expectedResult = 'this-is-a-test';

    texts.forEach((text) => {
      expect(stringToKebabCase(text)).to.equal(expectedResult);
    });
  });
});
