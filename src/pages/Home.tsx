import React from 'react';

import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { MyRepo } from '../components/MyRepo';

import { Stack } from '@chakra-ui/react';

export const Home: React.FC = () => {
  return (
    <>
      <SideBar />

      <Stack
        p="0 1rem 1rem 5rem"
        spacing="5rem"

      >
        <Header />
        <Portfolio  />
        <About />
        <MyRepo />
      </Stack>
    </>
  );
};