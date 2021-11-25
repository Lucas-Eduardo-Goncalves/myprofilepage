import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Title } from './Title';
import { Headline } from './Headline';
import { ContactButton } from './ContactButton';
import { AreaBlock } from './AreaBlock';

export const Header: React.FC = () => {
  return (
    <Flex
      h="100vh"
      align="center"
    >
      <Flex 
        flexDir="column"
        id="home"
      >

        <Title name="Hey,"/>
        <Title name="I'm Lucas,"/>
        <Title name="webdeveloper,"/>

        <Headline />

        <ContactButton />
      </Flex>

      <AreaBlock />
    </Flex>
  );
}