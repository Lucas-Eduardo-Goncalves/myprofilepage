import React from 'react';

import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { MyRepo } from '../components/MyRepo';
import { ContactMe } from '../components/ContactMe';

import { Stack, useMediaQuery } from '@chakra-ui/react';

export const Home: React.FC = () => {

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <SideBar />

      <Stack
        p={!isLargerThan800 ? "1rem" : "0 1rem 1rem 5rem"} 
        spacing="10rem"

      >
        <Header />
        <Portfolio  />
        <About />
        <MyRepo />
        <ContactMe />
      </Stack>
    </>
  );
};