import React from 'react';
import { useHistory } from 'react-router-dom';

import { LicenceTextEN } from './LicenceTextEN';
import { LicenceTextPT } from './LicenceTextPT';

import { GoChevronLeft } from 'react-icons/go';
import { Center, Icon, IconButton } from '@chakra-ui/react';
import { useLenguage } from '../../hooks/useLenguage';

export const Licence: React.FC = () => {
  const history = useHistory();
  const { lenguage } = useLenguage();

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
        <Icon as={GoChevronLeft} fontSize="1.75rem" />
      </IconButton>

      <Center h="100vh" w="100vw">
        {lenguage ? <LicenceTextPT/> : <LicenceTextEN/>}
      </Center>
    </>
  );
};