import React from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Flex, Heading, Input, Text, Textarea, Button } from '@chakra-ui/react';

interface InputProps  {
  name: string;
  email: string
  subject: string;
  message: string;
}

export const ContactMe: React.FC = () => {

  const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<InputProps>();

  const submitForm: SubmitHandler<InputProps> = data => {
    emailjs.sendForm('service_9ijvrcy', 'template_ruev0ki', '#contact', 'user_R903exDTQcVm3KfXACqiK')
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
      onSubmit={handleSubmit(submitForm)}
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
        {...register('name', {required: true})}
        isInvalid={!!errors.name}
      />

      <Input 
        placeholder="E-mail:"
        border="none"
        mt="0.5rem"
        bg="purple.700"
        {...register('email', {required: true})}
        isInvalid={!!errors.email}
      />

      <Input 
        placeholder="Subject:"
        mt="0.5rem"
        border="none"
        bg="purple.700"
        {...register('subject', {required: true})}
        isInvalid={!!errors.subject}
      />

      <Textarea
        placeholder="Message:"
        mt="0.5rem"
        bg="purple.700"
        {...register('message', {required: true})}
        isInvalid={!!errors.name}
        border="none"
        resize="none"
      />  

      <Button type="submit" colorScheme="green" mt="0.5rem" isLoading={isSubmitting}>
        Send E-mail
      </Button> 
    </Flex>
  );
}