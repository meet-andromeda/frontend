import BigNumber from 'bignumber.js';

interface ToBigNumberStringParams {
  number: string;
  shiftDecimalPositionToRightBy: number;
}

export default function toBigNumberString({
  number,
  shiftDecimalPositionToRightBy,
}: ToBigNumberStringParams): string {
  const bigNumber = new BigNumber(number)
    .times(10 ** shiftDecimalPositionToRightBy)
    .toFormat(0, { decimalSeparator: '.', groupSeparator: '' });

  return bigNumber.toString();
}
