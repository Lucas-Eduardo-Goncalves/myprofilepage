import React from 'react';
import { useHistory } from 'react-router-dom';

import { Main } from './Main';

import { Center, Box, IconButton, Icon } from '@chakra-ui/react';
import { useAuth } from '../../../hooks/useAuth';

import { GoChevronLeft } from 'react-icons/go';

export const Logged: React.FC = () => {

  const { user } = useAuth();

  const history = useHistory();

  if(user && user.id === "U2ve8Wl8ZSUf5hCP3jvHNAvgoQt2" ) {
    return <Main />
  } else {
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
          <Box bg="purple.400" p="1.4rem 4rem" borderRadius="0.5rem">
            Seja bem vindo! {user?.name}
          </Box>
        </Center>
      </>
    );
  };
};