import BigNumber from 'bignumber.js';

interface FormatToCurrencyParams {
  number: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  roundingMode?: BigNumber.RoundingMode;
}

function formatToCurrency({
  number,
  decimals = 2,
  prefix = '',
  suffix = '',
  roundingMode = BigNumber.ROUND_HALF_UP,
}: FormatToCurrencyParams): string {
  const bigNumber = new BigNumber(number);

  if (bigNumber.isEqualTo(0)) {
    return `${prefix}${suffix}`;
  }

  if (bigNumber.isLessThan(10 ** -decimals)) {
    return bigNumber
      .sd(2)
      .toFormat({
        prefix,
        decimalSeparator: '.',
        suffix,
      });
  }

  return bigNumber
    .decimalPlaces(decimals, roundingMode)
    .toFormat({
      prefix,
      decimalSeparator: '.',
      groupSeparator: ',',
      suffix,
      groupSize: 3,
    });
}

export default formatToCurrency;
