import React from 'react';

import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { Footer } from '../../components/Footer';

import { About } from './About';
import { ContactMe } from './ContactMe';
import { MyRepo } from './MyRepo';
import { Portfolio } from './Portfolio';

import { Stack, useMediaQuery } from '@chakra-ui/react';

export const Home: React.FC = () => {

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <SideBar />
      <Header />

      <Stack
        as="main"
        p={!isLargerThan800 ? "1rem" : "0 1rem 1rem 5rem"} 
        spacing="5rem"
      > 
        <Portfolio  />
        <About />
        <MyRepo />
        <ContactMe />
      </Stack>

      <Footer />
    </>
  );
};