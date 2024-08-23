import BigNumber from 'bignumber.js';

interface RoundDownWithSignificantDigitsParams {
  number: string;
  numberOfSignificantDigits?: number;
}

const format = {
  groupSeparator: '',
  decimalSeparator: '.',
};

const roundingType = BigNumber.ROUND_DOWN;

export default function roundDownWithSignificantDigits({
  number,
  numberOfSignificantDigits = 6,
}: RoundDownWithSignificantDigitsParams): string {
  const bigNumber = new BigNumber(number);

  if (bigNumber.isGreaterThanOrEqualTo(10000)) {
    const numberOfDecimals = 1;
    return bigNumber.toFormat(numberOfDecimals, roundingType, format);
  }

  if (bigNumber.isGreaterThanOrEqualTo(1000)) {
    const numberOfDecimals = 2;
    return bigNumber.toFormat(numberOfDecimals, roundingType, format);
  }

  if (bigNumber.isGreaterThanOrEqualTo(100)) {
    const numberOfDecimals = 3;
    return bigNumber.precision(numberOfSignificantDigits, roundingType)
      .toFormat(numberOfDecimals, format);
  }

  if (bigNumber.isGreaterThanOrEqualTo(10)) {
    const numberOfDecimals = 4;
    return bigNumber.precision(numberOfSignificantDigits, roundingType)
      .toFormat(numberOfDecimals, format);
  }

  if (bigNumber.isGreaterThanOrEqualTo(1)) {
    const numberOfDecimals = 5;
    return bigNumber.precision(numberOfSignificantDigits, roundingType)
      .toFormat(numberOfDecimals, format);
  }

  return bigNumber.precision(numberOfSignificantDigits, roundingType)
    .toFormat(format);
}
