import React from 'react';
import { useHistory } from 'react-router-dom';

import { Center, Button, Icon, IconButton } from '@chakra-ui/react';
import { useAuth } from '../../../hooks/useAuth';

import { GoChevronLeft } from 'react-icons/go';

export const Login: React.FC = () => {

  const { signInWithGoogle } = useAuth();

  const history = useHistory();

  return (
    <>
      <IconButton 
        aria-label="Back page" 
        colorScheme="purple"
        position="fixed" 
        left="1" 
        top="1"
        _focus={{}}
        onClick={() => history.push('/')}
      >
        <Icon 
          as={GoChevronLeft} 
          fontSize="1.75rem" 
        />
      </IconButton>

      <Center
        w="100vw"
        h="100vh"
      >
        <Button colorScheme="purple" p="1.4rem 4rem" _focus={{}} onClick={signInWithGoogle}>
          Faça seu Login
        </Button>
      </Center>
    </>
  );
}