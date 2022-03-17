import { Block } from './Block';
import { Flex, useBreakpointValue } from '@chakra-ui/react';

export const BlockArea = () => {
  const isLargerThanMd = useBreakpointValue({ base: false, lg: true })

  if (isLargerThanMd) {
    return (
      <Flex
        direction="column"
        position="relative"
        w={["18rem", "20rem"]}
        h={["22rem", "24rem"]}
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

  return (
    <Flex
      direction="column"
      position="absolute"
      top="0"
      right="0"
      w="20rem"
      h="24rem"
      ml="auto"
      zIndex="-1"
      opacity="0.7"
    >
      <Block 
        position="absolute"
        top="-5rem"
        right="2rem"
        bgGradient="linear(to-t, #f20089, #8900f2)"
      />
      <Block 
        position="absolute"
        top="1rem" 
        right="-4rem"
        bgGradient="linear(to-t, #3c096c, #ff9e00)"
      />
      <Block 
        position="absolute"
        top="8rem"
        right="-1rem"
        bgGradient="linear(to-t, #7209b7, #4cc9f0)"
      />
    </Flex>
  );
};