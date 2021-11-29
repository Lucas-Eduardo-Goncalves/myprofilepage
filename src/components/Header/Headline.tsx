import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { useLenguage } from '../../hooks/useLenguage';

export const Headline: React.FC = () => {

  const { lenguage } = useLenguage();

  return (
    <Flex
      mt="1.5rem"
      align="center"
    >
      <Text
        color="gray.300"
      >
        {lenguage ? "Desenvolvedor Front-End " : "Front-End Developer"}
      </Text>

      <Text
        color="purple.300"
        margin="0 0.5rem 0 0.5rem"
      >
        /
      </Text>

      <Text
        color="gray.300"
      >
        {lenguage ? "Minas Gerais, Brasil" : "Minas Gerais, Brazil"}
        
      </Text>
    </Flex>
  );
};