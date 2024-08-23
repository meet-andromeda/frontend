import {
  createContext,
  useState,
} from 'react';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import lightTheme from './themes/light-theme';
import GlobalStyles from './global-styles';
import { useContextFactory } from 'contexts/hooks';

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
});

interface ThemeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

function ThemeContextProvider({
  children,
}: ThemeContextProviderProps): JSX.Element {
  const [theme] = useState<Theme>(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

const useThemeContext = (): ThemeContextProps => useContextFactory({
  name: 'Web3',
  context: ThemeContext,
});

export {
  ThemeContext,
  useThemeContext,
};

export default ThemeContextProvider;
