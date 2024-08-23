import { expect } from 'chai';
import objectKeysToKebabCase from './object-keys-to-kebab-case';

describe('objectKeysToKebabCase', () => {
  it('should be a function', () => {
    expect(typeof objectKeysToKebabCase).to.equal('function');
  });

  it('[SUCCESS] should return an object with the keys in kebab case format', () => {
    const object = {
      cardMask: '5555',
      paymentAmount: 500,
      issuerName: 'Bank of America',
    };

    const expectedResponse = {
      'card-mask': '5555',
      'payment-amount': 500,
      'issuer-name': 'Bank of America',
    };

    const result = objectKeysToKebabCase(object);

    expect(result).to.deep.equal(expectedResponse);
  });
});
