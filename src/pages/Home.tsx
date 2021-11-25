import React from 'react';

import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';

import { Flex } from '@chakra-ui/react';

export const Home: React.FC = () => {
  return (
    <>
      <SideBar />

      <Flex
        p="0 1rem 1rem 5rem"
        direction="column"
  
      >
        <Header />
        <Portfolio  />
        <About />
      </Flex>
    </>
  );
};