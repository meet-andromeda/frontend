import { expect } from 'chai';
import { describe } from 'mocha';
import isAbortError from './is-abort-error';

describe('isAbortError', () => {
  it('[SUCCESS] should be a function', () => {
    expect(typeof isAbortError).to.equals('function');
  });

  it('[SUCCESS] should return true if the error name is AbortError', () => {
    const error = new Error();
    error.name = 'AbortError';

    const result = isAbortError(error);

    expect(result).to.equals(true);
  });

  it('[SUCCESS] should return false if the error name is Error', () => {
    const error = new Error();

    const result = isAbortError(error);

    expect(result).to.equals(false);
  });
});
