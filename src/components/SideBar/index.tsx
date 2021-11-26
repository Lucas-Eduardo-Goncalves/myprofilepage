import React from 'react';

import { Flex } from '@chakra-ui/react';

import { LinkButton } from './LinkButton';

import { ImHome } from 'react-icons/im';
import { FaCode, FaQuestionCircle } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';

export const SideBar: React.FC = () => {

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
        name="Portfolio"
        as="portfolio"
        icon={FaCode}
      />

      <LinkButton
        name="About"
        as="about"
        icon={FaQuestionCircle}
      />

      <LinkButton
        name="RepoStats"
        as="repostats"
        icon={GoRepoForked}
      />
    </Flex>
  );
};