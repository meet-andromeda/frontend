import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'routes';
import ThemeContextProvider from 'contexts/theme-context';
import ScrollToTop from 'scroll-to-top';
import Web3Connectors from 'web3';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <Router>
        <Web3Connectors>
          <ScrollToTop />
          <Routes />
        </Web3Connectors>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
