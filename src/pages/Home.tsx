import React from 'react';

import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { MyRepo } from '../components/MyRepo';
import { ContactMe } from '../components/ContactMe';

import { Stack, Flex, Text, useMediaQuery, Switch } from '@chakra-ui/react';
import { useLenguage } from '../hooks/useLenguage';

export const Home: React.FC = () => {

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const { lenguage, setLenguage } = useLenguage();
  
  return (
    <>
      <SideBar />

      <Stack
        p={!isLargerThan800 ? "1rem" : "0 1rem 1rem 5rem"} 
        spacing="5rem"
      > 

        <Header />
        <Portfolio  />
        <About />
        <MyRepo />
        <ContactMe />
      </Stack>

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
          defaultChecked={lenguage}
          onChange={() => setLenguage(!lenguage)}
          colorScheme="cyan"
        />

        <Text ml="1rem">
          Português
        </Text>
      </Flex>
    </>
  );
};