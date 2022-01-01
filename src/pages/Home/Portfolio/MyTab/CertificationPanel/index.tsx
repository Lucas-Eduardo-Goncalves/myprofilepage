import React from 'react';

import { SimpleGrid, Flex, Text, Img, useDisclosure } from '@chakra-ui/react';
import { Modal } from './Modal';

interface dataProps {
  name: string;
  sent: string;
  image: string;
  id: string;
}

interface props {
  data: dataProps[];
}

export const CertificationPanel: React.FC<props> = ({ data }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SimpleGrid
      columns={[1, null, 2]}
      gap="5"
    >
      {data?.map(project => (
        <Flex 
          key={project.id}
          direction="column"
          align="center"
          p="0.5rem"
          bg="purple.600"
          borderRadius="0.25rem"
        >
          <Text
            mb="0.5rem"
          >{project.name}</Text>
          <Img
            borderRadius="0.25rem"
            onClick={onOpen}
            src={project.image}
            alt={project.name}
          />

          <Modal image={project.image} isOpen={isOpen} onClose={onClose} />
        </Flex>
      ))}
    </SimpleGrid>
  );
}