import React from 'react';

import { HStack, Tooltip, Box, Icon } from '@chakra-ui/react';

import { ImLinkedin, ImGithub } from 'react-icons/im';
import { CgInstagram } from 'react-icons/cg';

export const Footer: React.FC = () => {
  return (
    <HStack
      ml="auto"
    >
      <Tooltip label="Linkedin"  bg="purple.300" color="white" hasArrow p="0.5rem">
        <Box as="a" target="_blank" href="https://www.linkedin.com/in/lucas-gon%C3%A7alves-62a16b209">
          <Icon
            as={ImLinkedin}
            color="purple.300"
            h="2rem"
            w="2rem"
          />
        </Box>
      </Tooltip>

      <Tooltip label="Github" bg="purple.300" color="white" hasArrow p="0.5rem">
        <Box as="a" target="_blank" href="https://github.com/Lucas-Eduardo-Goncalves">
          <Icon 
            as={ImGithub} 
            color="purple.300"
            h="2rem"
            w="2rem"
          />
        </Box>
      </Tooltip>

      <Tooltip label="Instagram" bg="purple.300" color="white" hasArrow p="0.5rem">
        <Box as="a" target="_blank" href="https://www.instagram.com/lukasedugoncalves">
          <Icon 
            as={CgInstagram} 
            color="purple.300"
            h="2rem"
            w="2rem"
          />
        </Box>
      </Tooltip>
    </HStack>
  );
};