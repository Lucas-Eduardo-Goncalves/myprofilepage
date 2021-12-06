import React from 'react';

import { Flex, useMediaQuery } from '@chakra-ui/react';

import { Title } from './Title';
import { Headline } from './Headline';
import { ContactButton } from './ContactButton';
import { AreaBlock } from './AreaBlock';
import { useLenguage } from '../../hooks/useLenguage';

export const Header: React.FC = () => {

  const { lenguage } = useLenguage();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      as="header"
      h="100vh"
      align="center"
      p={!isLargerThan800 ? "1rem" : "0 1rem 1rem 5rem"} 
    >
      <Flex 
        flexDir="column"
        id="home"
      >

        <Title name={lenguage ? "Olá," : "Hey,"}/>
        <Title name={lenguage ? "Eu sou o Lucas," : "I'm Lucas,"}/>
        <Title name={lenguage ? "Desenvolvedor web," : "webdeveloper,"}/>

        <Headline />

        <ContactButton />
      </Flex>

      <AreaBlock />
    </Flex>
  );
}