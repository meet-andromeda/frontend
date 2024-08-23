import { expect } from 'chai';
import arrayObjectKeysToCamelCase from './array-object-keys-to-camel-case';

describe('arrayObjectKeysToCamelCase', () => {
  it('[SUCCESS] should be a function', () => {
    expect(typeof arrayObjectKeysToCamelCase).to.equal('function');
  });

  it('[SUCCESS] should return the array with object keys in camel case', () => {
    const camelArray = [{
      currentPrice: 0.00088065,
      myId: 'chainlink',
    }, {
      currentPrice: 0.8065,
      myId: 'uniswap',
    }];

    const snakeArray = [{
      current_price: 0.00088065,
      my_id: 'chainlink',
    }, {
      current_price: 0.8065,
      my_id: 'uniswap',
    }];

    const newArray = arrayObjectKeysToCamelCase(snakeArray);
    expect(newArray).to.deep.equal(camelArray);
  });
});
