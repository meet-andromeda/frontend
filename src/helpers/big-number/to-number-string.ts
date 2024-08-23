import BigNumber from 'bignumber.js';

interface ToNumberStringParams {
  number: string | number;
  shiftDecimalPositionToLeftBy: number;
}

export default function toNumberString({
  number,
  shiftDecimalPositionToLeftBy,
}: ToNumberStringParams): string {
  return new BigNumber(number)
    .dividedBy(10 ** shiftDecimalPositionToLeftBy)
    .toFormat({ decimalSeparator: '.', groupSeparator: '' });
}
