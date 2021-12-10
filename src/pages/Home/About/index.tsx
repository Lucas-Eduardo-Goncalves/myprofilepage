import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import { Footer } from './Footer';
import { PText } from './PText';
import { useLenguage } from '../../../hooks/useLenguage';

export const About: React.FC = () => {

  const { lenguage } = useLenguage();

  return (
    <Flex
      id="about"
      direction="column"
      maxW="50rem"
    >
      <Heading 
        color="purple.300"
        fontSize={['2rem' , '3rem']}
      >
        {lenguage ? "Sobre mim" : "About"}
      </Heading>

      <PText />
      <Footer />
    </Flex>
  );
};