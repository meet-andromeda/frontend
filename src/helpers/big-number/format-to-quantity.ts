import BigNumber from 'bignumber.js';
import formatBigNumberModule from './format-big-number';

interface FormatBigNumberParams {
  number: string | undefined;
  decimals?: number;
  suffix?: string;
  roundingType?: BigNumber.RoundingMode;
  shortNumberFormatting?: boolean;
}

function formatToQuantity({
  number,
  decimals = 6,
  suffix = '',
  roundingType = BigNumber.ROUND_HALF_UP,
  shortNumberFormatting = true,
}: FormatBigNumberParams): string {
  const { formatBigNumber } = formatBigNumberModule;
  if (!number){
    return '0';
  }

  if (number === 'NaN') {
    return '';
  }
  const bigNumber = new BigNumber(number);
  const hundred = 100;

  if (bigNumber.isLessThan(10 ** -decimals)) {
    return bigNumber.sd(2).toFormat({
      suffix,
      decimalSeparator: '.',
    });
  }

  if (bigNumber.isGreaterThanOrEqualTo(hundred)) {
    return formatBigNumber({
      number,
      suffix,
      decimals: 1,
      roundingType,
      shortNumberFormatting,
    });
  }

  const format = {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    suffix,
  };
  return bigNumber.toFormat(decimals, roundingType, format);
}

export default formatToQuantity;
