import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Fuego from './services/swr-firestore';
import { FuegoProvider } from '@nandorojo/swr-firestore'
import { firebaseConfig } from './services/firebase';

import { Home } from './pages/Home';

import { theme } from './styles/GlobalStyles';

export const App: React.FC = () => {

  const fuego = new Fuego(firebaseConfig);

  return (
    <FuegoProvider fuego={fuego}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </FuegoProvider>
  );
};