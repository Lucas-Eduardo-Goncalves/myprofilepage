import React from 'react';

import { Heading } from '@chakra-ui/react';

interface TitleProps {
  name: string;
}

export const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <Heading 
      as="h1"
      fontSize="6rem"
    >
      {name}
    </Heading>
  );
}