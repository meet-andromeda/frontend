import addTransparencyToHexColorCode from './add-transparency-to-hex-color-code';

interface DistributionChartColors {
  sector: string[];
  size: string[];
}

function distributionChartColors({
  primaryColor,
  sizeColor,
  sectorColor,
}:
{ primaryColor: string,
  sizeColor: string,
  sectorColor: string, }): DistributionChartColors {
  const size = [
    sectorColor,
    addTransparencyToHexColorCode({
      colorCode: sectorColor,
      transparencyPercentage: 60,
    }),
    addTransparencyToHexColorCode({
      colorCode: sectorColor,
      transparencyPercentage: 30,
    }),
  ];

  const sector = [
    primaryColor,
    addTransparencyToHexColorCode({
      colorCode: primaryColor,
      transparencyPercentage: 70,
    }),
    addTransparencyToHexColorCode({
      colorCode: primaryColor,
      transparencyPercentage: 40,
    }),
    addTransparencyToHexColorCode({
      colorCode: primaryColor,
      transparencyPercentage: 10,
    }),
    addTransparencyToHexColorCode({
      colorCode: primaryColor,
      transparencyPercentage: 5,
    }),
    addTransparencyToHexColorCode({
      colorCode: sizeColor,
      transparencyPercentage: 20,
    }),
    addTransparencyToHexColorCode({
      colorCode: sizeColor,
      transparencyPercentage: 50,
    }),
    addTransparencyToHexColorCode({
      colorCode: sizeColor,
      transparencyPercentage: 80,
    }),
    sizeColor,
  ];

  return {
    size,
    sector,
  };
}

export default distributionChartColors;
