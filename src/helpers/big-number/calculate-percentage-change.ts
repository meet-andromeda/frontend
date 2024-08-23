import BigNumber from 'bignumber.js';

interface CalculatePercentageChangeParams {
  oldNumber: string;
  newNumber: string;
}

const hundredPercent = 100;
const format = { decimalSeparator: '.', groupSeparator: '', suffix: '%' };

function calculatePercentageChange({
  oldNumber,
  newNumber,
}: CalculatePercentageChangeParams): string {
  if (oldNumber === '0') {
    if (newNumber === '0') {
      return 'NaN';
    }
    return 'Infinity';
  }
  const oldBigNumber = new BigNumber(oldNumber);
  const newBigNumber = new BigNumber(newNumber);
  const difference = newBigNumber.minus(oldBigNumber);
  const proportion = difference.div(oldBigNumber);
  const percentage = proportion.times(hundredPercent);
  return percentage.toFormat(2, 0, format);
}

export default calculatePercentageChange;
