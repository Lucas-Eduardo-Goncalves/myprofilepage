import React, { useEffect } from 'react';

import { Flex, useMediaQuery  } from '@chakra-ui/react';

import { LinkButton } from './LinkButton';

import { ImHome } from 'react-icons/im';
import { FaCode, FaQuestionCircle } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
import { MdOutlineContactMail } from 'react-icons/md';
import { useLenguage } from '../../hooks/useLenguage';

export const SideBar: React.FC = () => {

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const { lenguage } = useLenguage();

  if(isLargerThan800) {
    return (
      <Flex 
        position="fixed"
        as="nav"
        top="0"
        left="0"
        flexDirection="column"
        overflow="hidden"
        justify="center"
        bg="purple.800"
        w="4rem"
        h="100vh"
        transition="width 0.3s"
        zIndex="2"
        _hover={{
          w: "9rem"
        }}
      >
        <LinkButton
          name="Home"
          as="home"
          icon={ImHome}
        />

        <LinkButton
          name={lenguage ? "Portfólio" : "Portfolio"}
          as="portfolio"
          icon={FaCode}
        />

        <LinkButton
          name={lenguage ? "Sobre" : "About"}
          as="about"
          icon={FaQuestionCircle}
        />

        <LinkButton
          name="RepoStats"
          as="repostats"
          icon={GoRepoForked}
        />

        <LinkButton
          name={lenguage ? "Contato" : "Contact"}
          as="contact"
          icon={MdOutlineContactMail}
        />
      </Flex>
    )
  } else {
    return (
      <Flex 
        position="fixed"
        as="nav"
        bottom="0"
        align="center"
        justify="center"
        
        bg="purple.800"
        w="100vw"
        h="4rem"
        transition="width 0.3s"
        zIndex="2"
      >
        <LinkButton
          as="home"
          icon={ImHome}
        />

        <LinkButton
          as="portfolio"
          icon={FaCode}
        />

        <LinkButton
          as="about"
          icon={FaQuestionCircle}
        />

        <LinkButton
          as="repostats"
          icon={GoRepoForked}
        />

        <LinkButton
          as="contact"
          icon={MdOutlineContactMail}
        />
      </Flex>
    );
  }
};