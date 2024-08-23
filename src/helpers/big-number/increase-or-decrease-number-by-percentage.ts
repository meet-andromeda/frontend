import BigNumber from 'bignumber.js';
import { BigNumberAsString, NumberAsString } from 'types';

const oneHundredPercent = 100;

interface IncreaseOrDecreaseNumberByPercentageParams {
  number: NumberAsString | BigNumberAsString;
  percentage: number;
}

/**
 * Increase the number if the percentage is positive.
 * Decrease the number if the percentage provided is negative.
 * @param   number      the number to increase or decrease
 * @param   percentage  a positive or negative number
 * @returns number or big number as string
 */
function increaseOrDecreaseNumberByPercentage({
  number,
  percentage,
}: IncreaseOrDecreaseNumberByPercentageParams):
  | NumberAsString
  | BigNumberAsString {
  return new BigNumber(number)
    .times(oneHundredPercent + percentage)
    .div(oneHundredPercent)
    .toString();
}

export default increaseOrDecreaseNumberByPercentage;
