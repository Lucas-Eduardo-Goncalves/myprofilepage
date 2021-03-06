import React from 'react';
import { Link as LinkRouterDom } from 'react-router-dom';

import {
  SimpleGrid,
  Flex,
  Link
} from '@chakra-ui/react';

import { Iten } from './Iten';

interface DataProps {
  id: string;
  description: string;
  name: string;
  image: string;
  repoLink: string;
  projectLink: string;
  tools: string[];
}

interface FrontEndPanelData {
  data: DataProps[];
}

export const FrontEndPanel: React.FC<FrontEndPanelData> = ({data}) => {
  return (
    <>
      <SimpleGrid
        columns={[1, null, 2]}
        gap="5"
      >
        {data?.slice(0, 4).map(project => (
          <Iten key={project.name + project.id} product={project}/> 
        ))}
      </SimpleGrid>

      <Flex justify="center" mt="1rem">
        <Link as={LinkRouterDom} to="allprojects">Veja mais dos meus projetos FrontEnd</Link>
      </Flex>
    </>
  );
};