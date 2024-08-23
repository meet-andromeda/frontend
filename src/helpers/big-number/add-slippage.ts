import BigNumber from 'bignumber.js';

const oneHundredPercent = 100;

interface AddSlippageParams {
  amount: string | number;
  slippagePercentage: number;
}

export default function addSlippage({
  amount,
  slippagePercentage,
}: AddSlippageParams): string {
  return new BigNumber(amount)
    .times(oneHundredPercent - slippagePercentage)
    .div(oneHundredPercent)
    .toFormat({ decimalSeparator: '.', groupSeparator: '' });
}
