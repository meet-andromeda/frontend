import BigNumber from 'bignumber.js';

interface DivideParams {
  number1: string | number;
  number2: string | number;
}

export default function divide({
  number1,
  number2,
}: DivideParams): string {
  const bigNumber = new BigNumber(number1)
    .dividedBy(new BigNumber(number2))
    .toFormat({ decimalSeparator: '.', groupSeparator: '' });

  return bigNumber.toString();
}
