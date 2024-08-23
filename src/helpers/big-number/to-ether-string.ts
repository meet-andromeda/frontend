import toNumberString from './to-number-string';

function toEtherString(numberInWei: string): string {
  return toNumberString({
    number: numberInWei,
    shiftDecimalPositionToLeftBy: 18,
  });
}

export default toEtherString;
