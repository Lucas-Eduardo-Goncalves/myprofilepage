import React from 'react';

import { Heading } from '@chakra-ui/react';

interface TitleProps {
  name: string;
}

export const Title: React.FC<TitleProps> = ({ name }) => {

  return (
    <Heading 
      as="h1"
      fontSize={['2rem' , '3rem', '4rem', '5em']}
    >
      {name}
    </Heading>
  );
}