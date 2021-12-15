import React from 'react';
import { useHistory } from 'react-router-dom'

import { SimpleGrid, Icon, IconButton } from '@chakra-ui/react';
import { GoChevronLeft } from 'react-icons/go';
import { useCollection } from '@nandorojo/swr-firestore';
import { Iten } from './Iten';

interface DataProjectProps {
  description: string;
  name: string;
  image: string;
  repoLink: string;
  projectLink: string;
  tools: string[];
}

export const AllProjects: React.FC = () => {
  const history = useHistory();

  const { data: DataProjects } = useCollection<DataProjectProps>('projects', {    
    listen: true, 
    orderBy: ['published_at', 'desc'],
  });

  return (
    <>
      <IconButton 
        aria-label="Back page" 
        colorScheme="purple"
        position="fixed" 
        left="1" 
        top="1"
        _focus={{}}
        onClick={() => history.push('/')}
      >
        <Icon 
          as={GoChevronLeft} 
          fontSize="1.75rem" 
        />
      </IconButton>

      <SimpleGrid
        mt="3rem"
        p="1rem"
        columns={[1, null, 2]}
        gap="5"
      >
        {DataProjects?.map(project => (
          <Iten key={project.name + project.id} product={project}/> 
        ))}
      </SimpleGrid>
    </>
  );
}