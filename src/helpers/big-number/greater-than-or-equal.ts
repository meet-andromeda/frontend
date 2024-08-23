import BigNumber from 'bignumber.js';

interface GreaterThanOrEqualParams {
  number1: string | number;
  number2: string | number;
}

export default function greaterThanOrEqual({
  number1,
  number2,
}: GreaterThanOrEqualParams): boolean {
  return new BigNumber(number1)
    .gte(number2);
}
