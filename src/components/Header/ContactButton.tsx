import React from 'react';

import { Button } from '@chakra-ui/react';

export const ContactButton: React.FC = () => {
  return (
    <Button
      bg="purple.300"
      w="15rem"
      mt="1.5rem"
      borderRadius="0.25rem"
      _hover={{
        bg: "purple.500"
      }}
    >
      Contact-me
    </Button>
  );
};