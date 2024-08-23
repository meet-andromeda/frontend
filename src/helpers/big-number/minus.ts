import BigNumber from 'bignumber.js';

interface MinusParams {
  number1: string | number;
  number2: string | number;
}

export default function minus({
  number1,
  number2,
}: MinusParams): string {
  const bigNumber = new BigNumber(number1)
    .minus(new BigNumber(number2))
    .toFormat({ decimalSeparator: '.', groupSeparator: '' });

  return bigNumber.toString();
}
