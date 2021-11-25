import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Home } from './pages/Home';

import { theme } from './styles/GlobalStyles';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};