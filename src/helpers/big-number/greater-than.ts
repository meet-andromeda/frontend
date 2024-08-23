import BigNumber from 'bignumber.js';

interface GreaterThanParams {
  number1: string | number;
  number2: string | number;
}

export default function greaterThan({
  number1,
  number2,
}: GreaterThanParams): boolean {
  return new BigNumber(number1)
    .gt(number2);
}
