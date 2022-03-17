import { useLenguage } from '../../hooks/useLenguage';

import { Title } from './Title';
import { Headline } from './Headline';
import { ContactButton } from './ContactButton';
import { BlockArea } from './BlockArea';

import { Flex, useBreakpointValue } from '@chakra-ui/react';

export const Header = () => {
  const { lenguage } = useLenguage();
  const isLargerThanMd = useBreakpointValue({ base: false, md: true })

  return (
    <Flex
      as="header"
      h="100vh"
      align="center"
      position="relative"
      overflow="hidden"
      p={!isLargerThanMd ? "1rem" : "0 1rem 1rem 5rem"} 
    >
      <Flex direction="column" id="home">
        <Title name={lenguage ? "Olá," : "Hey,"}/>
        <Title name={lenguage ? "Eu sou o Lucas," : "I'm Lucas,"}/>
        <Title name={lenguage ? "Desenvolvedor web," : "webdeveloper,"}/>
        
        <Headline />
        <ContactButton />
      </Flex>

      <BlockArea />
    </Flex>
  );
};