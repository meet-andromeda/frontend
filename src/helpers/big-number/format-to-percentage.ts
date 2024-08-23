import BigNumber from 'bignumber.js';

interface FormatToPercentageParams {
  number: string;
  decimals?: number;
}

function formatToPercentage({
  number,
  decimals = 2,
}: FormatToPercentageParams): string {
  const format = {
    suffix: '%',
    decimalSeparator: '.',
  };
  const result = new BigNumber(number).multipliedBy(100);
  return result.toFormat(decimals, format);
}

export default formatToPercentage;
