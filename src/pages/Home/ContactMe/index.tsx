import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

import { useForm, SubmitHandler } from 'react-hook-form';

import { Flex, Heading, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { useLenguage } from '../../../hooks/useLenguage';

interface InputProps  {
  name: string;
  email: string
  subject: string;
  message: string;
}

export const ContactMe: React.FC = () => {

  const [loading, setLoading] = useState(false);

  const { register, formState: { errors }, handleSubmit, reset } = useForm<InputProps>();

  const { lenguage } = useLenguage();

  const submitForm: SubmitHandler<InputProps> = data => {
    setLoading(true);

    emailjs.sendForm('service_9ijvrcy', 'template_ruev0ki', '#contact', 'user_R903exDTQcVm3KfXACqiK')
      .then(() => {
        toast.success(lenguage ? 'Email enviado com sucesso' : 'Email send success.')
        setLoading(false);
      }, () => {
        toast.error(lenguage ? 'Ocorreu um erro' : 'Email send error.')
        setLoading(false);
    });

    reset();
  }

  return (
    <Flex
      id="contact"
      direction="column"
      maxW="40rem"
      as="form"
      onSubmit={handleSubmit(submitForm)}
    >
      <Toaster />

      <Heading 
        color="purple.300"
        fontSize={['2rem' , '3rem']}
      >
        {lenguage ? "Me contate" : "Contact me"}
      </Heading>

      <Text
        maxW="50rem"
        mt="1rem"
        mb="1rem"
        fontSize={["0.8rem", "1rem"]}
      >
        {lenguage ? "Me contate pelo E-mail" : "Contact me from e-mail."}
      </Text>

      <Input 
        placeholder={lenguage ? "Nome:" : "Name:"}
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
        placeholder={lenguage ? "Sujeito" : "Subject:"}
        mt="0.5rem"
        border="none"
        bg="purple.700"
        {...register('subject', {required: true})}
        isInvalid={!!errors.subject}
      />

      <Textarea
        placeholder={lenguage ? "Mensagem:" : "Message:"}
        mt="0.5rem"
        bg="purple.700"
        {...register('message', {required: true})}
        isInvalid={!!errors.name}
        border="none"
        resize="none"
      />  

      <Button type="submit" colorScheme="green" mt="0.5rem" isLoading={loading}>
        {lenguage ? "Enviar E-mail" : "Send E-mail"}
      </Button> 
    </Flex>
  );
}