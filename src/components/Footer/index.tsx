import React from 'react';
import JSON from '../../../package.json';

import { Flex, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Flex 
      as="footer" 
      align="center" 
      m="5rem 0 1rem 0"
      justify="center" 
      fontSize="sm"
    >
      <Text>
        &copy; Dev Lucas Gonçalves 
      </Text>

      <Text m="0 1rem">
        MIT Licence
      </Text>

      <Text>
        V - {JSON.version}
      </Text>
    </Flex>
  );
};