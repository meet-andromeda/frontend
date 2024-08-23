import BigNumber from 'bignumber.js';

interface PlusParams {
  number1: string | number;
  number2: string | number;
}

export default function plus({
  number1,
  number2,
}: PlusParams): string {
  const bigNumber = new BigNumber(number1)
    .plus(new BigNumber(number2))
    .toFormat({ decimalSeparator: '.', groupSeparator: '' });

  return bigNumber.toString();
}
