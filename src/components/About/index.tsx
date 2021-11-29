import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

import { Footer } from './Footer';
import { PText } from './PText';

export const About: React.FC = () => {
  return (
    <Flex
      id="about"
      direction="column"
      maxW="50rem"
    >
      <Heading 
        color="purple.300"
        fontSize="3rem"  
      >
        About
      </Heading>

      <PText />
      <Footer />
    </Flex>
  );
};