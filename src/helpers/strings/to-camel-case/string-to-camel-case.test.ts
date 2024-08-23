import { expect } from 'chai';
import stringToCamelCase from './string-to-camel-case';

describe('stringToCamelCase', () => {
  const texts = ['this-Is_a-test', 'This`Is,a~test', 'ThisIsATest'];

  it('should be a function', () => {
    expect(typeof stringToCamelCase).to.equal('function');
  });

  it('[SUCCESS] should return a string in camel case format', () => {
    const expectedResult = 'thisIsATest';

    texts.forEach((text) => {
      expect(stringToCamelCase(text)).to.equal(expectedResult);
    });
  });
});
