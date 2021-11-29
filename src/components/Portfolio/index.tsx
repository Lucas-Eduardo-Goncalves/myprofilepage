import React from 'react';

import { Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

import { Iten } from './Iten';
import { useCollection } from '@nandorojo/swr-firestore';
import { useLenguage } from '../../hooks/useLenguage';

interface DataProps {
  description: string;
  name: string;
  image: string;
  repoLink: string;
  projectLink: string;
  tools: string[];
}

export const Portfolio: React.FC = () => {

  const { data } = useCollection<DataProps>('projects', {listen: true});
  const { lenguage } = useLenguage();

  return (
    <Flex
      id="portfolio"
      direction="column"
    >
      <Heading 
        color="purple.300"
        fontSize="3rem"  
      >
        {lenguage ? "Meu portfólio" : "My Portfolio"}
      </Heading>

      <Text 
        maxW="50rem"
        mt="1rem"
        mb="1rem"
      >
        {lenguage ? "Alguns dos meus melhores projetos que trabalhei nos últimos meses. Alguns deles são desenvolvidos e projetados por mim, e outros são apenas o código :)" : "Some of my best projects I've worked on in the last few months. Some of them are developed and designed by me, and others are just code :)"}
      </Text>

      <SimpleGrid
        minChildWidth="20rem"
        gap="5"
      >
        {data?.map(project => (
          <Iten key={project.id} product={project}/> 
        ))}
      </SimpleGrid>
      
    </Flex>
  );
};