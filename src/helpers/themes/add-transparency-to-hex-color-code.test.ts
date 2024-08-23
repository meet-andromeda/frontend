import { expect } from 'chai';
import addTransparencyToHexColorCode from './add-transparency-to-hex-color-code';

describe('addTransparencyToHexColorCode', () => {
  it('[SUCCESS] should be a function', () => {
    expect(typeof addTransparencyToHexColorCode).to.equals('function');
  });

  it('[SUCCESS] should return a concatenated string with a hex value at the end', () => {
    const colorCode = '#0011222';
    const transparencyPercentage = 50;
    const expected = `${colorCode}80`;

    const result = addTransparencyToHexColorCode({
      colorCode,
      transparencyPercentage,
    });

    expect(typeof result).to.equals('string');
    expect(result).to.equals(expected);
  });
});
