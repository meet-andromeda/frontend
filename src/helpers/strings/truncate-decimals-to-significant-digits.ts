import { NumberAsString } from 'types';

interface TruncateDecimalsToSignificantDigitsProps {
  number: NumberAsString;
  decimalSignificantDigits?: number;
}

/**
 * This function truncates the decimal part of a number to a certain number of significant digits.
 * Leading zeros in the decimal part are not considered significant. Therefore, once the first non-zero
 * digit is found, the significant count starts.
 *
 * @param number                    The number to truncate.
 * @param decimalSignificantDigits  The number of decimals to keep.
 *
 * @returns {NumberAsString} The truncated number.
*/
function truncateDecimalsToSignificantDigits({
  number,
  decimalSignificantDigits = 4,
}: TruncateDecimalsToSignificantDigitsProps): NumberAsString {
  const [integerPart, decimalPart] = number.split('.');

  if (!decimalPart || decimalSignificantDigits === 0) {
    return integerPart;
  }
  const decimalPartArray = decimalPart.split('');
  const firstNonZeroCharacterIndex = decimalPartArray.findIndex((character) => character !== '0');
  const slicedDecimalPartArray = decimalPartArray.slice(
    0,
    firstNonZeroCharacterIndex + decimalSignificantDigits,
  );
  const decimalPartWithoutTrailingZeros = slicedDecimalPartArray.join('').replace(/0+$/, '');
  if (decimalPartWithoutTrailingZeros === '') {
    return integerPart;
  }

  const truncatedNumber = `${integerPart}.${decimalPartWithoutTrailingZeros}`;
  return truncatedNumber;
}

export default truncateDecimalsToSignificantDigits;
