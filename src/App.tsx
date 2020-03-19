import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import { theme } from '@ben/shared-ui';

import Routes from './views/Routes';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default hot(module)(App);
