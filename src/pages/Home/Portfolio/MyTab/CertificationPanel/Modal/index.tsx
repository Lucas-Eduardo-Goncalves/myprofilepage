import React from 'react';

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Img
} from '@chakra-ui/react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

export const Modal: React.FC<ModalProps> = ({ image, isOpen, onClose }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent
        bg="purple.600"
        m="auto 0.5rem"
      >
        <ModalBody p="1rem">
          <Img 
            src={image}
            alt={image}
          />
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}