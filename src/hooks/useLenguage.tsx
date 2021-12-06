import React, { createContext, useState, useContext } from 'react';

import { Flex, Text, Switch } from '@chakra-ui/react';

interface AuthContextData {
  lenguage: boolean;
  setLenguage: (data: boolean) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const LenguageProvider: React.FC = ({ children }) => {

  const [isLenguage, setIsLenguage] = useState(() => {
    const lenguage = localStorage.getItem('LucasGoncalvesPage:lenguage');

    if(lenguage) {
      return Boolean(lenguage);
    }

    return true;
  });

  function setLenguage(data: boolean) {
    setIsLenguage(data);
    localStorage.setItem('LucasGoncalvesPage:lenguage', String(data));
  }

  return(
    <AuthContext.Provider value={{ lenguage: isLenguage, setLenguage}}>

      <Flex
        position="fixed"
        top="2"
        right="2"
        zIndex="3"
        size="md"
        align="center"
      >
        <Text mr="1rem">
          Inglês
        </Text>

        <Switch 
          defaultChecked={isLenguage}
          onChange={() => setLenguage(!isLenguage)}
          colorScheme="cyan"
        />

        <Text ml="1rem">
          Português
        </Text>
      </Flex>

      {children}
    </AuthContext.Provider>
  );
};

export function useLenguage(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  };

  return context;
}