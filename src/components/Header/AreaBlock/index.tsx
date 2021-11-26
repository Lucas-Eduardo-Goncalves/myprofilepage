import React from 'react';

import { Flex, useMediaQuery } from '@chakra-ui/react';

import { Block } from './Block';

export const AreaBlock: React.FC = () => {
  
  const [isLargerThan1010] = useMediaQuery("(min-width: 1010px)")

  return (
    <Flex
      display={!isLargerThan1010 ? 'none' : ''}
      direction="column"
      position="relative"
      w="20rem"
      h="24rem"
      ml="auto"
    >
      <Block 
        position="absolute"
        top="0"
        left="0"
        bgGradient="linear(to-t, #f20089, #8900f2)"
      />
      <Block 
        position="absolute"
        top="8rem" 
        left="7rem"
        bgGradient="linear(to-t, #3c096c, #ff9e00)"
      />
      <Block 
        position="absolute"
        top="13rem"
        left="-2rem"
        bgGradient="linear(to-t, #7209b7, #4cc9f0)"
      />
    </Flex>
  );
};