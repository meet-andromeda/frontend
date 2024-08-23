import BigNumber from 'bignumber.js';

export default function isZero(number1: string | number): boolean {
  return new BigNumber(number1).isZero();
}
