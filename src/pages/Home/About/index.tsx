import { useLenguage } from '../../../hooks/useLenguage';

import { Footer } from './Footer';
import { MyDescription } from './MyDescription';

import { Flex, Heading } from '@chakra-ui/react';

export const About = () => {
  const { lenguage } = useLenguage();

  return (
    <Flex
      id="about"
      direction="column"
      maxW="50rem"
    >
      <Heading color="purple.300" fontSize={['2rem' , '3rem']}>
        {lenguage ? "Sobre mim" : "About"}
      </Heading>

      <MyDescription />
      <Footer />
    </Flex>
  );
};