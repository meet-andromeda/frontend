import { isPositiveNumber, isNumber, isZero } from 'helpers/big-number';

function isValidInputAmount(textNumber: string): boolean {
  return isNumber(textNumber) && (
    isZero(textNumber) || isPositiveNumber(textNumber)
  );
}

export default isValidInputAmount;
