import React from 'react';

import { 
  Flex, 
  Box, 
  Img, 
  useDisclosure,
  SimpleGrid,
  Text,
  Icon,
  Heading,
  Stack,
  Button,  
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton 
} from '@chakra-ui/react';

import { BsEyeFill } from 'react-icons/bs'; 
import { TiCodeOutline } from 'react-icons/ti';
import { useLenguage } from '../../../../../hooks/useLenguage';

interface ProductProps {
  product: {
    description: string;
    name: string;
    image: string;
    repoLink: string;
    projectLink: string;
    tools: string[];
  };
}

export const Iten: React.FC<ProductProps> = ({product}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { lenguage } = useLenguage();

  return (
    <>
    <Flex 
      direction="column"
      borderRadius="0.5rem"
      bg="purple.800"
      onClick={onOpen}
    >
      <Box 
        w="100%"
        bg="purple.600"
        textAlign="center"
        borderRadius="0.5rem 0.5rem 0 0"
        p="0.5rem"
      >
       {product.name}
      </Box>

      <Flex
        align="center"
        justify="center"
        h="100%"
        p="4rem"
        border="4px solid transparent"
        borderTop="none"
        borderRadius="0 0 0.5rem 0.5rem"
        transition="all 0.2s"
        _hover={{
          borderColor: "purple.600",
        }}
      >
        <Img w="100%" src={product.image} alt="Twitter Image"/>
      </Flex>
    </Flex>
    
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" scrollBehavior="inside">
        <ModalOverlay />
          
        <ModalContent
          bg="purple.800"
        >
          <ModalHeader>{lenguage ? "Nome:" : "Name:"} {product.name}</ModalHeader>
          <ModalCloseButton _focus={{}}/>

          <ModalBody>
            <SimpleGrid minChildWidth="20rem">
              <Flex w="100%" maxW="20rem" justify="center" align="center">
                <Img 
                  src={product.image}
                  alt={product.name}
                />
              </Flex>

              <Stack spacing="4">
                <Flex direction="column">
                  <Heading as="h3" size="md">
                    {lenguage ? "Descrição:" : "Description:"}
                  </Heading>
                  <Text mt="1">
                    {product.description}
                  </Text>
                </Flex>

                <Flex direction="column">
                  <Heading as="h3" size="md">
                    {lenguage ? "Ferramentas:" : "Tools:"}
                  </Heading>

                  <Stack spacing="1" mt="1">
                    {product.tools.map(item => (
                      <Text p="0.25rem" borderRadius="0.25rem" bg="purple.600" key={item}>
                        {item}
                      </Text>
                    ))}
                  </Stack>
                </Flex>
              </Stack>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>

            <Button 
              as="a" 
              href={product.projectLink}
              target="_blank" 
              colorScheme="purple" 
              mr={3} 
              onClick={onClose}
              leftIcon={<Icon as={BsEyeFill} />}
            >
              Demo
            </Button>

            <Button 
              as="a" 
              href={product.repoLink} 
              target="_blank" 
              colorScheme="purple"
              mr={3}
              onClick={onClose}
              leftIcon={<Icon as={TiCodeOutline} />}
            >
              Code
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};