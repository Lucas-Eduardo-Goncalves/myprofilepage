import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Title } from './Title';
import { Headline } from './Headline';
import { ContactButton } from './ContactButton';
import { AreaBlock } from './AreaBlock';
import { useLenguage } from '../../hooks/useLenguage';

export const Header: React.FC = () => {

  const { lenguage } = useLenguage();

  return (
    <Flex
      h="100vh"
      align="center"
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