import BigNumber from 'bignumber.js';

interface RoundWithSignificantDigitsParams {
  number: string;
  numberOfSignificantDigits?: number;
  numberOfDecimals?: number;
}

const format = {
  groupSeparator: '',
  decimalSeparator: '.',
};

const roundingType = BigNumber.ROUND_DOWN;

export default function roundWithSignificantDigits({
  number,
  numberOfSignificantDigits = 6,
  numberOfDecimals = 2,
}: RoundWithSignificantDigitsParams): string {
  const bigNumber = new BigNumber(number);

  return bigNumber
    .precision(numberOfSignificantDigits, roundingType)
    .toFormat(numberOfDecimals, format);
}
