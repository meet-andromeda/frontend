import BigNumber from 'bignumber.js';

function isPositiveNumber(number: string | number): boolean {
  const bigNumber = new BigNumber(number);

  return bigNumber.isFinite() && bigNumber.isGreaterThan(0);
}

export default isPositiveNumber;
