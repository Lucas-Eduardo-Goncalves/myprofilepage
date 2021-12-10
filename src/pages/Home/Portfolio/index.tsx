import React from 'react';

import { Flex, Heading, Text } from '@chakra-ui/react';

import { useLenguage } from '../../../hooks/useLenguage';

import { MyTab } from './MyTab';

export const Portfolio: React.FC = () => {

  const { lenguage } = useLenguage();

  return (
    <Flex
      id="portfolio"
      direction="column"
    >
      <Heading 
        color="purple.300"
        fontSize={['2rem' , '3rem']} 
      >
        {lenguage ? "Meu portfólio" : "My Portfolio"}
      </Heading>

      <Text 
        maxW="50rem"
        mt="1rem"
        mb="1rem"
        fontSize={["0.8rem", "1rem"]}
      >
        {lenguage ? "Alguns dos meus melhores projetos que trabalhei nos últimos meses. Alguns deles são desenvolvidos e projetados por mim, e outros são apenas o código :)" : "Some of my best projects I've worked on in the last few months. Some of them are developed and designed by me, and others are just code :)"}
      </Text>

      <MyTab />
    </Flex>
  );
};