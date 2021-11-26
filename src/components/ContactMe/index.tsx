import React from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

import { Flex, Heading, Input, Text, Textarea, Button } from '@chakra-ui/react';

export const ContactMe: React.FC = () => {

  const submitForm = (data: any) => {
    data.preventDefault();

    emailjs.sendForm('service_9ijvrcy', 'template_ruev0ki', data.target, 'user_R903exDTQcVm3KfXACqiK')
      .then(() => {
        toast.success('Email send success.')
      }, () => {
        toast.error('Email send error.')
    });
  }

  return (
    <Flex
      id="contact"
      direction="column"
      minH="100vh"
      maxW="40rem"
      as="form"
      onSubmit={submitForm}
    >
      <Toaster />

      <Heading 
        color="purple.300"
        fontSize="3rem"  
      >
        Contact me
      </Heading>

      <Text
        maxW="50rem"
        mt="1rem"
        mb="1rem"
      >
        Contact me from e-mail.
      </Text>

      <Input 
        placeholder="Name:"
        border="none"
        mt="0.5rem"
        bg="purple.700"
        name='name'
      />

      <Input 
        placeholder="E-mail:"
        border="none"
        mt="0.5rem"
        bg="purple.700"
        name='email'
      />

      <Input 
        placeholder="Subject:"
        mt="0.5rem"
        border="none"
        bg="purple.700"
        name='subject'
      />

      <Textarea
        placeholder="Message:"
        mt="0.5rem"
        bg="purple.700"
        name='message'
        border="none"
        resize="none"
      />  

      <Button type="submit" colorScheme="green" mt="0.5rem">
        Send E-mail
      </Button> 
    </Flex>
  );
}