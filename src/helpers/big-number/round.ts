import BigNumber from 'bignumber.js';

interface RoundParams {
  number: string;
  decimals: number;
}

export default function round({
  number,
  decimals,
}: RoundParams): string {
  const bigNumber = new BigNumber(number).toFixed(decimals);

  return bigNumber.toString();
}
