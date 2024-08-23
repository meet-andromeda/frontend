import { expect } from 'chai';
import { describe } from 'mocha';
import isError from './is-error';

describe('isError', () => {
  it('[SUCCESS] should be a function', () => {
    expect(typeof isError).to.equals('function');
  });

  it('[SUCCESS] should return true if the value supplied is an instance of Error', () => {
    const error = new Error();

    const result = isError(error);

    expect(result).to.equals(true);
  });

  it('[SUCCESS] should return false if the value supplied is a number', () => {
    const number = 1;

    const result = isError(number);

    expect(result).to.equals(false);
  });

  it('[SUCCESS] should return false if the value supplied is an object', () => {
    const error = {
      message: 'message',
    };

    const result = isError(error);

    expect(result).to.equals(false);
  });
});
