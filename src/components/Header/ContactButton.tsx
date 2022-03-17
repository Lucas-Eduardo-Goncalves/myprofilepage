import { Link } from "react-scroll";
import { useLenguage } from '../../hooks/useLenguage';
import { Button } from '@chakra-ui/react';

export const ContactButton = () => {
  const { lenguage } = useLenguage();

  return (
    <Button
      as={Link}
      bg="purple.300"
      w={["10rem", "15rem"]}
      fontSize={["0.8rem", "1rem"]}
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