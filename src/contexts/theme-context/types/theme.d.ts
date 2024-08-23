import Mode from './mode';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      mode: Mode;
      common: {
        white: string;
        black: string;
      };
      primary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      outlines: {
        main: string;
        dark: string;
        light: string;
      };
      character: {
        main: string;
        light: string;
        disable: string;
        info: string;
        error: string;
        warning: string;
      };
      performance: {
        positive: string;
        negative: string;
      };
      grayscale: {
        firstLevel: string;
        secondLevel: string;
        thirdLevel: string;
        fourthLevel: string;
        fifthLevel: string;
        sixthLevel: string;
        thirteenthLevel: string;
      };
      charts: {
        distribution: {
          sector: string[];
          size: string[];
        };
        comparison: string[];
      };
    };
    shadows: {
      inputShadow: string;
    };
    borders: {
      main: string;
      dark: string;
      danger: string;
    };
    background: {
      main: string;
      hover: string;
      mainContrast: string;
      disable: string;
      disableContrast: string;
      scrim: string;
      success: string;
      info: string;
      error: string;
      warning: string;
    };
  }

  interface TypographyVariants {
    headingPrimary: React.CSSProperties;
    headingSecondary: React.CSSProperties;
    headingTertiary: React.CSSProperties;
    subheadingSecondary: React.CSSProperties;
    subheadingRegular: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodyRegular: React.CSSProperties;
    bodyDescription: React.CSSProperties;
    bodyUnderline: React.CSSProperties;
    subtitleBold: React.CSSProperties;
    subtitleMedium: React.CSSProperties;
    subtitleRegular: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    headingPrimary?: React.CSSProperties;
    headingSecondary?: React.CSSProperties;
    headingTertiary?: React.CSSProperties;
    subheadingSecondary?: React.CSSProperties;
    subheadingRegular?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodyRegular?: React.CSSProperties;
    bodyDescription?: React.CSSProperties;
    bodyUnderline?: React.CSSProperties;
    subtitleBold?: React.CSSProperties;
    subtitleMedium?: React.CSSProperties;
    subtitleRegular?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headingPrimary: true;
    headingSecondary: true;
    headingTertiary: true;
    subheadingRegular: true;
    subheadingSecondary: true;
    bodyMedium: true;
    bodyRegular: true;
    bodyDescription: true;
    bodyUnderline: true;
    subtitleBold: true;
    subtitleMedium: true;
    subtitleRegular: true;
  }
}
