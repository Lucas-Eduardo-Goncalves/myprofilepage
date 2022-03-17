import JSON from '../../../package.json';
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
    <Flex 
      as="footer" 
      align="center" 
      m="5rem 0 1rem 0"
      justify="center" 
      fontSize="sm"
    >
      <Text>
        &copy; Dev Lucas Gonçalves 
      </Text>
  
      <ChakraLink as={Link} to="/licence" m="0 1rem">
        MIT Licence
      </ChakraLink>
  
      <Text>
        V - {JSON.version}
      </Text>
    </Flex>
  );
};