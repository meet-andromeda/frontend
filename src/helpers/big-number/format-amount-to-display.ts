import BigNumber from 'bignumber.js';
import { truncateDecimalsToSignificantDigits } from 'helpers/strings';
import formatToCurrency from './format-to-currency';

interface FormatAmountToDisplayParams {
  number: string;
  significantDecimals?: number;
}

/**
 * Formats a number string for display purposes. It
 * truncates the decimal part to certain significant digits
 * and then formats to currency.
 *
 * @param number    The number string to format for display.
 * @param decimals  The number of significant (non-zero) decimals to keep.
 *
 * @returns {string} The formatted number string for user display.
 */
function formatAmountToDisplay({
  number,
  significantDecimals = 2,
}: FormatAmountToDisplayParams): string {
  const formattedAmountToDisplay = formatToCurrency({
    number: truncateDecimalsToSignificantDigits({
      number,
      decimalSignificantDigits: significantDecimals,
    }),
    roundingMode: BigNumber.ROUND_DOWN,
    decimals: significantDecimals,
  });

  return formattedAmountToDisplay;
}

export default formatAmountToDisplay;
