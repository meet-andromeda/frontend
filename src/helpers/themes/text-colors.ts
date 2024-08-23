import addTransparencyToHexColorCode from './add-transparency-to-hex-color-code';

interface TextColors {
  dark: string;
  normal: string;
  light: string;
}

function textColors(
  { colorCode }:
  { colorCode: string },
): TextColors {
  return {
    dark: addTransparencyToHexColorCode({
      colorCode,
      transparencyPercentage: 87,
    }),
    normal: addTransparencyToHexColorCode({
      colorCode,
      transparencyPercentage: 60,
    }),
    light: addTransparencyToHexColorCode({
      colorCode,
      transparencyPercentage: 30,
    }),
  };
}

export default textColors;
