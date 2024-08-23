import BigNumber from 'bignumber.js';

function isNumber(number: string | number): boolean {
  return new BigNumber(number).isFinite();
}

export default isNumber;
