import React from 'react';
import { Tooltip as ChakraTooltip } from '@chakra-ui/react';

export const Tooltip: React.FC = ({ children }) =>  (
  <ChakraTooltip label="Linkedin"  bg="purple.300" color="white" hasArrow p="0.5rem">
    {children}
  </ChakraTooltip>
);