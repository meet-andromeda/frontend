import { expect } from 'chai';
import arrayObjectKeysToKebabCase from './array-object-keys-to-kebab-case';

describe('arrayObjectKeysToKebabCase', () => {
  it('[SUCCESS] should be a function', () => {
    expect(typeof arrayObjectKeysToKebabCase).to.equal('function');
  });

  it('[SUCCESS] should return the array with object keys in kebab case', () => {
    const camelArray = [{
      currentPrice: 0.00088065,
      myId: 'chainlink',
    }, {
      currentPrice: 0.8065,
      myId: 'uniswap',
    }];

    const kebabArray = [{
      'current-price': 0.00088065,
      'my-id': 'chainlink',
    }, {
      'current-price': 0.8065,
      'my-id': 'uniswap',
    }];

    const newArray = arrayObjectKeysToKebabCase(camelArray);
    expect(newArray).to.deep.equal(kebabArray);
  });
});
