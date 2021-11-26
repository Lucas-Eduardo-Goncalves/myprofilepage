import React from 'react';

import { Button } from '@chakra-ui/react';
import { Link } from "react-scroll";

export const ContactButton: React.FC = () => {
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
      Contact-me
    </Button>
  );
};