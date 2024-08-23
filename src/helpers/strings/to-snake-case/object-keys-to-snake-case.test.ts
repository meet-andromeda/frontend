import { expect } from 'chai';
import objectKeysToSnakeCase from './object-keys-to-snake-case';

describe('objectKeysToSnakeCase', () => {
  it('should be a function', () => {
    expect(typeof objectKeysToSnakeCase).to.equal('function');
  });

  it('[SUCCESS] should return an object with the keys in snake case format', () => {
    const object = {
      cardMask: '5555',
      paymentAmount: 500,
      issuerName: 'Bank of America',
    };

    const expectedResponse = {
      card_mask: '5555',
      payment_amount: 500,
      issuer_name: 'Bank of America',
    };

    const result = objectKeysToSnakeCase(object);

    expect(result).to.deep.equal(expectedResponse);
  });
});
