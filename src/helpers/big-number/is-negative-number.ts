import BigNumber from 'bignumber.js';

function isNegativeNumber(number: string | number): boolean {
  const bigNumber = new BigNumber(number);

  return bigNumber.isFinite() && bigNumber.isLessThan(0);
}

export default isNegativeNumber;
