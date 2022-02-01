import React from 'react';
import Header from './components/Header';
import AppRoutes from './Routes';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
