import React, { memo } from 'react';

import { Flex, Icon, Text } from '@chakra-ui/react';
import { Link } from "react-scroll";

interface LinkButtonProps {
  name?: string;
  icon: React.ElementType;
  as: string;
}

const LinkButtonComponente: React.FC<LinkButtonProps> = ({ icon, name = '', as }) => {
  return (
    <Flex
      as={Link}
      activeClass="active"
      to={as}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      align="center"
      h={"3.5rem"}
      _hover={{
        bg: 'purple.700',
        cursor: 'pointer'
      }}
    >
      <Flex
        minW="4rem"
        justify="center"
      >
        <Icon fontSize={["1.25rem", "1.5rem"]} as={icon} />
      </Flex>
      <Text>
        {name}
      </Text>
    </Flex>
  );
}

export const LinkButton = memo(LinkButtonComponente, (prevProps, nextProps) => { 
  return Object.is(prevProps, nextProps); 
});