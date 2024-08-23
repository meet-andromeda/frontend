import BigNumber from 'bignumber.js';

interface LowerThanParams {
  number1: string | number;
  number2: string | number;
}

export default function lowerThan({
  number1,
  number2,
}: LowerThanParams): boolean {
  return new BigNumber(number1)
    .lt(number2);
}
