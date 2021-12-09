import React from 'react';

import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Title } from './Title';
import { Headline } from './Headline';
import { ContactButton } from './ContactButton';
import { AreaBlock } from './AreaBlock';
import { useLenguage } from '../../hooks/useLenguage';

export const Header: React.FC = () => {

  const { lenguage } = useLenguage();
  const isLargerThanMd = useBreakpointValue({ base: false, md: true })

  return (
    <Flex
      as="header"
      h="100vh"
      align="center"
      p={!isLargerThanMd ? "1rem" : "0 1rem 1rem 5rem"} 
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