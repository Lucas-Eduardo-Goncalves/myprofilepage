import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import DancingLines from 'react-dancing-lines';

import Fuego from './services/swr-firestore';
import { FuegoProvider } from '@nandorojo/swr-firestore'
import { firebaseConfig } from './services/firebase';

import { Routes } from './routes';

import { theme } from './styles/GlobalStyles';
import { LenguageProvider } from './hooks/useLenguage';
import { AuthContextProvider } from './hooks/useAuth';

export const App: React.FC = () => {

  const fuego = new Fuego(firebaseConfig);

  return (
    <FuegoProvider fuego={fuego}>
      <DancingLines />
    
      <AuthContextProvider>
        <LenguageProvider>
          <ChakraProvider theme={theme}>
            <Routes />
          </ChakraProvider>
        </LenguageProvider>
      </AuthContextProvider>
    </FuegoProvider>
  );
};