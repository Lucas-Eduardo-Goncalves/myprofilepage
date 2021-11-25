import React from 'react';

import { Flex, Box, Img } from '@chakra-ui/react';

interface ProductProps {
  product: {
    description: string;
    name: string;
    image: string;
    repoLink: string;
    tools: string[];
  };
}

export const Iten: React.FC<ProductProps> = ({product}) => {
  return (
    <Flex 
      direction="column"
      maxW="40rem"
      w="100%"
      borderRadius="0.5rem"
      h="20rem"
      bg="purple.800"
    >
      <Box 
        w="100%"
        bg="purple.600"
        textAlign="center"
        borderRadius="0.5rem 0.5rem 0 0"
        p="0.5rem"
      >
       {product.name}
      </Box>

      <Flex
        align="center"
        justify="center"
        h="100%"
        p="3rem"
        border="4px solid transparent"
        borderTop="none"
        borderRadius="0 0 0.5rem 0.5rem"
        transition="all 0.2s"
        _hover={{
          borderColor: "purple.600",
        }}
      >
        <Img src={product.image} alt="Twitter Image"/>
      </Flex>
    </Flex>
  );
};