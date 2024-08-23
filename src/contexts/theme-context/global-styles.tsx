import { GlobalStyles as createGlobalStyle, useTheme } from '@mui/material';

function GlobalStyles(): JSX.Element {
  const { background } = useTheme();
  return createGlobalStyle({
    styles: {
      body: {
        backgroundColor: background.main,
        margin: 0,
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
  });
}

export default GlobalStyles;
