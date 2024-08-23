import { expect } from 'chai';
import removeNonNumericCharacters from './remove-non-numeric-characters';

describe('removeNonNumericCharacters', () => {
  it('[SUCCESS] Should be a function', () => {
    expect(typeof removeNonNumericCharacters).to.equals('function');
  });

  it('[SUCCESS] Should return a string without commas and currency symbols', () => {
    const text = '$100,000,000.500';

    const result = removeNonNumericCharacters(text);

    expect(result).to.equals('100000000.500');
  });

  it('[SUCCESS] Should return an empty string if only a dot or point (.) is provided', () => {
    const text = '.';

    const result = removeNonNumericCharacters(text);

    expect(result).to.equals('');
  });
});
