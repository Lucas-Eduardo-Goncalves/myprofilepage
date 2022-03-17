import React, { createContext, useState, useContext } from 'react';
import { Flex, Text, Switch } from '@chakra-ui/react';

interface lenguageContextData {
  lenguage: boolean;
  setLenguage: (data: boolean) => void;
};

const LenguageContext = createContext<lenguageContextData>({} as lenguageContextData);

export const LenguageProvider: React.FC = ({ children }) => {
  const [isLenguage, setIsLenguage] = useState(false);
  const setLenguage = (data: boolean) => setIsLenguage(data);

  return(
    <LenguageContext.Provider value={{ lenguage: isLenguage, setLenguage}}>
      <Flex
        position="fixed"
        top="2"
        right="2"
        zIndex="3"
        size="md"
        align="center"
      >
        <Text mr="1rem">
          English
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
    </LenguageContext.Provider>
  );
};

export function useLenguage(): lenguageContextData {
  const context = useContext(LenguageContext)

  if (!context) {
    throw new Error('useLenguage must be used with in an LenguageProvider');
  };

  return context;
};