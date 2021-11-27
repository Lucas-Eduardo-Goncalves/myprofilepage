import React from 'react';

import { Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

import { Iten } from './Iten';
import { useCollection } from '@nandorojo/swr-firestore';

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

  return (
    <Flex
      id="portfolio"
      direction="column"
    >
      <Heading 
        color="purple.300"
        fontSize="3rem"  
      >
        My Portfolio
      </Heading>

      <Text 
        maxW="50rem"
        mt="1rem"
        mb="1rem"
      >
        Some of my best projects that I have worked on in the past months. Some of them are both developed and designed by me, and others it's just the code {`:)`}     
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