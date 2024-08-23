import BigNumber from 'bignumber.js';

interface MultiplyParams {
  number1: string | number;
  number2: string | number;
}

export default function multiply({
  number1,
  number2,
}: MultiplyParams): string {
  const bigNumber = new BigNumber(number1)
    .times(new BigNumber(number2))
    .toFormat({ decimalSeparator: '.', groupSeparator: '' });

  return bigNumber.toString();
}
