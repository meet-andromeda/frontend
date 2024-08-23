import { expect } from 'chai';
import { faker } from '@faker-js/faker/locale/af_ZA';
import truncateDecimalsToSignificantDigits from './truncate-decimals-to-significant-digits';

describe('truncateDecimalsToSignificantDigits', () => {
  it('[SUCCESS] Should be a function', () => {
    expect(typeof truncateDecimalsToSignificantDigits).to.equals('function');
  });

  it('[SUCCESS] Should return the number with the decimal part truncated to the ""decimalSignificantDigits""', () => {
    const number = '1234.000056089';

    const result = truncateDecimalsToSignificantDigits({
      number,
      decimalSignificantDigits: 3,
    });

    expect(result).to.be.a('string');
    expect(result).to.eq('1234.000056');
  });

  it('[SUCCESS] FUZZ - Should return the number with the decimal part truncated to the ""decimalSignificantDigits""', () => {
    const integerPart = faker.number.int();
    const decimalPartLength = faker.number.int({
      min: 2,
      max: 6,
    });
    const decimalPart = faker.string.numeric({
      allowLeadingZeros: true,
      length: decimalPartLength,
    });
    const decimalSignificantDigits = faker.number.int({
      min: 1,
      max: decimalPartLength - 1,
    });
    const number = `${integerPart}.${decimalPart}`;

    // Determine expected result
    const decimalPartArray = decimalPart.split('');
    const firstNonZeroCharacterIndex = decimalPartArray.findIndex((character) => character !== '0');
    const slicedDecimalPartArray = decimalPartArray.slice(
      0,
      firstNonZeroCharacterIndex + decimalSignificantDigits,
    );
    const decimalPartWithoutTrailingZeros = slicedDecimalPartArray.join('').replace(/0+$/, '');
    const expectedTruncatedNumber = decimalPartWithoutTrailingZeros === ''
      ? integerPart
      : `${integerPart}.${decimalPartWithoutTrailingZeros}`;

    const result = truncateDecimalsToSignificantDigits({
      number,
      decimalSignificantDigits,
    });

    expect(result).to.be.a('string');
    expect(result).to.eq(expectedTruncatedNumber);
  });

  it('[SUCCESS] Should return the same number if it has less decimals than the "decimalSignificantDigits" param', () => {
    const decimalPartLength = faker.number.int({
      min: 1,
      max: 6,
    });
    const decimalPart = faker.string.numeric({
      allowLeadingZeros: true,
      length: decimalPartLength,
    });
    const decimalPartWithoutTrailingZeros = decimalPart.replace(/0+$/, '');
    const integerPart = faker.number.int();
    const number = decimalPartWithoutTrailingZeros.length
      ? `${integerPart}.${decimalPartWithoutTrailingZeros}`
      : integerPart.toString();
    const decimalSignificantDigits = faker.number.int({
      min: decimalPartLength + 1,
      max: decimalPartLength + 6,
    });

    const result = truncateDecimalsToSignificantDigits({
      number,
      decimalSignificantDigits,
    });

    expect(result).to.be.a('string');
    expect(result).to.eq(number);
  });

  it('[SUCCESS] Should return the same number if it has no decimals', () => {
    const numberWithNoDecimals = faker.number.int().toString();

    const result = truncateDecimalsToSignificantDigits({
      number: numberWithNoDecimals,
    });

    expect(result).to.be.a('string');
    expect(result).to.eq(numberWithNoDecimals);
  });

  it('[SUCCESS] Should return the number with no decimals if "decimalSignificantDigits" is zero', () => {
    const decimalPart = faker.string.numeric({
      allowLeadingZeros: true,
      length: 5,
    });
    const integerPart = faker.number.int();
    const number = `${integerPart}.${decimalPart}`;

    const result = truncateDecimalsToSignificantDigits({
      number,
      decimalSignificantDigits: 0,
    });

    expect(result).to.be.a('string');
    expect(result).to.eq(integerPart.toString());
  });
});
