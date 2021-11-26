import React from 'react';

import { Center, CenterProps, Box } from '@chakra-ui/react';

interface ContainerProps extends CenterProps {
  bgGradient: string;
}

export const Block: React.FC<ContainerProps> = ({bgGradient, ...rest}) => {

  return (
    <Center
      w="12rem"
      h="12rem"
      {...rest}
    >
      <Box
        w="12rem"
        h="12rem"
        bgGradient={bgGradient}
        transition="all 0.2s"
        _hover={{
          w: "10rem",
          h: "10rem"
        }}
      >
      </Box>
    </Center>
  );
}