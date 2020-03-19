import React, { FC } from 'react';
import { hot } from 'react-hot-loader';

import Routes from './views/Routes';

const App: FC = () => <Routes />;

export default hot(module)(App);
