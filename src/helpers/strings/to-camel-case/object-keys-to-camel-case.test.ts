import { expect } from 'chai';
import objectKeysToCamelCase from './object-keys-to-camel-case';

describe('objectKeysToCamelCase', () => {
  it('should be a function', () => {
    expect(typeof objectKeysToCamelCase).to.equal('function');
  });

  it('[SUCCESS] should return an object with the keys in camel case format', () => {
    const object = {
      card_mask: '5555',
      payment_amount: 500,
      issuer_name: 'Bank of America',
    };

    const expectedResponse = {
      cardMask: '5555',
      paymentAmount: 500,
      issuerName: 'Bank of America',
    };

    const result = objectKeysToCamelCase(object);

    expect(result).to.deep.equal(expectedResponse);
  });
});
