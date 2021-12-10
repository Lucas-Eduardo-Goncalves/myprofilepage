import React from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { useLenguage } from '../../hooks/useLenguage';

export const Headline: React.FC = () => {

  const { lenguage } = useLenguage();

  return (
    <Flex
      mt={["0.5rem", "1rem", "1.5rem"]}
      align="center"
    >
      <Text
        color="gray.300"
        fontSize={["0.6rem", "0.8rem", "1rem"]}
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
        fontSize={["0.6rem", "0.8rem", "1rem"]}
      >
        {lenguage ? "Minas Gerais, Brasil" : "Minas Gerais, Brazil"}
        
      </Text>
    </Flex>
  );
};