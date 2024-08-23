import { transparencyHexColorCodes } from '../constants';
import { TransparencyHexColorCode } from '../types';

interface AddTransparencyToHexColorCodeParams {
  colorCode: string;
  transparencyPercentage: TransparencyHexColorCode;
}

function addTransparencyToHexColorCode({
  colorCode,
  transparencyPercentage,
}: AddTransparencyToHexColorCodeParams): string {
  return colorCode + transparencyHexColorCodes[transparencyPercentage];
}

export default addTransparencyToHexColorCode;
