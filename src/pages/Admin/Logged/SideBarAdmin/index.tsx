import React from 'react';

import { Flex, Avatar, Text } from '@chakra-ui/react';

interface Props {
  user: {
    id: string;
    name: string;
    avatar: string;
  }
}

export const SideBar: React.FC<Props> = ({user}) => {
  return (
    <Flex 
      position="fixed"
      as="nav"
      top="0"
      left="0"
      flexDirection="column"
      overflow="hidden"
      bg="purple.800"
      w="4rem"
      h="100vh"
      transition="width 0.3s"
      zIndex="2"
      _hover={{
        w: "9rem"
      }}
    >
      <Flex align="center">
        <Flex minW="4rem" minH="4rem" align="center" justify="center">
          <Avatar name={user.name} src={user.avatar} />
        </Flex>

        <Text>{user.name}</Text>
      </Flex>
    </Flex>
  )
};