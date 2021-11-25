import React from 'react';

import { Text } from '@chakra-ui/react';

export const PText: React.FC = () => {
  return (
    <>
      <Text 
        maxW="50rem"
        mt="1rem"
        mb="1rem"
      >
       Hello, my name is Lucas Gonçalves. I am a self-taught web developer living in the state of Minas Gerais, Brazil.
      </Text>

      <Text 
        maxW="50rem"
        mb="1rem"
      >
        I've been struggling at the front end for the past year, and eventually started enjoying the idea behind every line of code. Now, as professionally connected with the software industry, I am interested in the front-end scope and free of new opportunities.
      </Text>

      <Text 
        maxW="50rem"
        mb="1rem"
      >
        I'm a big fan of animations, transitions, colors, shadows and things like that. I think everything added up to an empty space can give a unique perspective on websites.
      </Text>
    </>
  );
};