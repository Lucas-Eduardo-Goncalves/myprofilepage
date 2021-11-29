import React from 'react';

import { Button } from '@chakra-ui/react';
import { Link } from "react-scroll";
import { useLenguage } from '../../hooks/useLenguage';

export const ContactButton: React.FC = () => {

  const { lenguage } = useLenguage();

  return (
    <Button
      bg="purple.300"
      as={Link}
      w="15rem"
      mt="1.5rem"
      borderRadius="0.25rem"
      _hover={{
        bg: "purple.500"
      }}
      to="contact"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {lenguage ? "Me contate" : "Contact-me"}
    </Button>
  );
};