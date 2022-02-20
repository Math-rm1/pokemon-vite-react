import React from 'react';
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
