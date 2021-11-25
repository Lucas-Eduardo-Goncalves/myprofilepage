import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

export const Headline: React.FC = () => {
  return (
    <Flex
      mt="1.5rem"
      align="center"
    >
      <Text
        color="gray.300"
      >
        Front-End Developer
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
        Minas Gerais, Brazil
      </Text>
    </Flex>
  );
};