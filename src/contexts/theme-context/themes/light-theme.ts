import { createTheme, Theme } from '@mui/material';
import { modes, colors } from '../constants';
import addTransparencyToHexColorCode from '../helpers/add-transparency-to-hex-color-code';

const palette = {
  mode: modes.light,
  common: {
    white: colors.white,
    black: colors.black,
  },
  primary: {
    main: colors.electricGreen,
    light: colors.electricGreen,
    dark: colors.islamicGreen,
    contrastText: colors.white,
  },
  outlines: {
    main: colors.auroMetalSaurus,
    dark: colors.raisinBlack,
    light: colors.platinum,
  },
  character: {
    main: colors.raisinBlack,
    light: colors.auroMetalSaurus,
    disable: colors.platinum,
    info: colors.auroMetalSaurus,
    error: colors.coralRed,
    warning: colors.palominoGold,
  },
  performance: {
    positive: colors.apple,
    negative: colors.raisinBlack,
  },
  grayscale: {
    firstLevel: colors.lotion,
    secondLevel: colors.lightGray,
    thirdLevel: colors.brightGray,
    fourthLevel: colors.platinum,
    fifthLevel: colors.cadetBlue,
    sixthLevel: colors.auroMetalSaurus,
    thirteenthLevel: colors.darkGunmetal,
  },
  charts: {
    comparison: [
      colors.frenchRose,
      colors.earlsGreen,
      colors.endeavour,
      colors.malibu,
    ],
  },
};

const typography = {
  fontFamily: [
    'Satoshi Variable',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ].join(','),
  headingPrimary: {
    fontSize: '2.375rem',
    fontWeight: 'bold',
    color: palette.character.main,
  },
  headingSecondary: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: palette.character.main,
  },
  headingTertiary: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: palette.character.main,
  },
  subheadingRegular: {
    fontSize: '1rem',
    fontWeight: 400,
    color: palette.character.main,
  },
  subheadingSecondary: {
    fontSize: '1rem',
    fontWeight: 500,
    color: palette.character.light,
  },
  bodyMedium: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: palette.character.light,
  },
  bodyRegular: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: palette.character.light,
  },
  bodyDescription: {
    fontSize: '0.75rem',
    fontWeight: 400,
    color: palette.character.light,
  },
  bodyUnderline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    color: palette.character.light,
    textDecorationLine: 'underline',
  },
  subtitleBold: {
    fontSize: '1rem',
    fontWeight: 700,
    color: palette.grayscale.thirteenthLevel,
  },
  subtitleMedium: {
    fontSize: '1rem',
    fontWeight: 500,
    color: palette.grayscale.thirteenthLevel,
  },
  subtitleRegular: {
    fontSize: '1rem',
    fontWeight: 400,
    color: palette.grayscale.thirteenthLevel,
  },
};

const lightTheme: Theme = createTheme(
  {
    typography,
    palette,
  },
  {
    shadows: {
      ...Array(25).fill('none'),
      inputShadow: `0 0 0 0.125rem ${colors.diamond}`,
    },
    borders: {
      main: colors.brightGray,
      dark: colors.brightGray,
      danger: colors.brightGray,
    },
    background: {
      main: colors.white,
      hover: colors.lightGray,
      mainContrast: colors.raisinBlack,
      disable: colors.platinum,
      disableContrast: colors.ghostWhite,
      scrim: addTransparencyToHexColorCode({
        colorCode: colors.raisinBlack,
        transparencyPercentage: 48,
      }),
      success: addTransparencyToHexColorCode({
        colorCode: colors.electricGreen,
        transparencyPercentage: 20,
      }),
      info: addTransparencyToHexColorCode({
        colorCode: colors.auroMetalSaurus,
        transparencyPercentage: 10,
      }),
      error: addTransparencyToHexColorCode({
        colorCode: colors.coralRed,
        transparencyPercentage: 10,
      }),
      warning: colors.crocusTint,
    },
  },
);

export default lightTheme;
