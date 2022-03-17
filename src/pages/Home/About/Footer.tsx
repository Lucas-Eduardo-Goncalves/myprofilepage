import { Tooltip } from '../../../components/Tooltip';

import { ImLinkedin, ImGithub } from 'react-icons/im';
import { CgInstagram } from 'react-icons/cg';

import { HStack, Box, Icon } from '@chakra-ui/react';

export const Footer = () => (
  <HStack ml="auto">
    <Tooltip>
      <Box 
        as="a" 
        target="_blank" 
        href="https://www.linkedin.com/in/lucas-gon%C3%A7alves-62a16b209"
      >
        <Icon as={ImLinkedin} color="purple.300" h="2rem" w="2rem"/>
      </Box>
    </Tooltip>

    <Tooltip>
      <Box 
        as="a" 
        target="_blank" 
        href="https://github.com/Lucas-Eduardo-Goncalves"
      >
        <Icon as={ImGithub} color="purple.300" h="2rem" w="2rem"/>
      </Box>
    </Tooltip>

    <Tooltip>
      <Box 
        as="a" 
        target="_blank" 
        href="https://www.instagram.com/lukasedugoncalves"
      >
        <Icon as={CgInstagram} color="purple.300" h="2rem" w="2rem"/>
      </Box>
    </Tooltip>
  </HStack>
);