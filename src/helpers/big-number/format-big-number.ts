import BigNumber from 'bignumber.js';

interface FormatBigNumberParams {
  number: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  decimalSeparator?: string;
  groupSeparator?: string;
  groupSize?: number;
  round?: boolean;
  roundingType?: BigNumber.RoundingMode;
  shortNumberFormatting?: boolean;
}

const limits = {
  oneThousand: 1000,
  oneMillion: 1000000,
};

function formatBigNumber({
  number,
  decimals = 2,
  prefix = '',
  suffix = '',
  decimalSeparator = '.',
  groupSeparator = ',',
  groupSize = 3,
  round = true,
  roundingType = BigNumber.ROUND_HALF_UP,
  shortNumberFormatting = true,
}: FormatBigNumberParams): string {
  const bigNumber = new BigNumber(number);

  const format = {
    prefix,
    decimalSeparator,
    groupSeparator,
    groupSize,
    suffix,
  };

  if (bigNumber.isLessThan(limits.oneThousand) || !round || !shortNumberFormatting) {
    return bigNumber.toFormat(decimals, roundingType, format);
  }

  let divisor = limits.oneThousand;
  format.suffix = `k${suffix}`;

  if (bigNumber.isGreaterThanOrEqualTo(limits.oneMillion)) {
    divisor = limits.oneMillion;
    format.suffix = suffix ? `M${suffix}` : 'M';
  }

  const result = bigNumber.dividedBy(divisor);
  return result.toFormat(decimals, roundingType, format);
}

export default { formatBigNumber };
