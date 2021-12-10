import React from 'react';

import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { Footer } from '../../components/Footer';

import { About } from './About';
import { ContactMe } from './ContactMe';
import { MyRepo } from './MyRepo';
import { Portfolio } from './Portfolio';

import { Stack, useBreakpointValue } from '@chakra-ui/react';

export const Home: React.FC = () => {

  const isLargerThanMd = useBreakpointValue({ base: false, md: true })

  return (
    <>
      <SideBar />
      <Header />

      <Stack
        as="main"
        p={!isLargerThanMd ? "1rem 1rem 5rem 1rem" : "0 1rem 1rem 5rem"} 
        spacing="5rem"
      > 
        <Portfolio  />
        <About />
        <MyRepo />
        <ContactMe />
        <Footer />
      </Stack>
    </>
  );
};