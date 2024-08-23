import { expect } from 'chai';
import arrayObjectKeysToSnakeCase from './array-object-keys-to-snake-case';

describe('arrayObjectKeysToSnakeCase', () => {
  it('[SUCCESS] should be a function', () => {
    expect(typeof arrayObjectKeysToSnakeCase).to.equal('function');
  });

  it('[SUCCESS] should return the array with object keys in snake case', () => {
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

    const newArray = arrayObjectKeysToSnakeCase(camelArray);
    expect(newArray).to.deep.equal(snakeArray);
  });
});
