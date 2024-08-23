import { expect } from 'chai';
import capitalizeFirstLetter from './capitalize-first-letter';

describe('capitalizeFirstLetter', () => {
  it('[SUCCESS] should be a function', () => {
    expect(typeof capitalizeFirstLetter).to.equals('function');
  });

  it('[SUCCESS] should return a word with the first letter in uppercase', () => {
    const text = 'word';

    const result = capitalizeFirstLetter(text);

    expect(result).to.equals('Word');
  });

  it('[SUCCESS] should return a sentence with the first letter in uppercase', () => {
    const text = 'this is a sentence';

    const result = capitalizeFirstLetter(text);

    expect(result).to.equals('This is a sentence');
  });

  it('[SUCCESS] should return an empty string if the provided one is empty', () => {
    const text = '';

    const result = capitalizeFirstLetter(text);

    expect(result).to.equals('');
  });
});
