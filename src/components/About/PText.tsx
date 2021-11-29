import React from 'react';

import { Text } from '@chakra-ui/react';
import { useLenguage } from '../../hooks/useLenguage';

export const PText: React.FC = () => {
  
  const { lenguage } = useLenguage();
  
  return (
    <>
      <Text 
        maxW="50rem"
        mt="1rem"
        mb="1rem"
      >
        {lenguage ? (
          "Olá, meu nome é Lucas Gonçalves. Sou um desenvolvedor web autodidata que vive no estado de Minas Gerais, Brasil."
        ) : (
          "Hello, my name is Lucas Gonçalves. I am a self-taught web developer living in the state of Minas Gerais, Brazil."
        )}
      </Text>

      <Text 
        maxW="50rem"
        mb="1rem"
      >
        {lenguage ? (
          "Eu tenho lutado na frente no último ano, e eventualmente comecei a desfrutar da ideia por trás de cada linha de código. Agora, como profissionalmente conectado com a indústria de software, estou interessado no escopo front-end e livre de novas oportunidades."
        ) : (
        "I've been struggling at the front end for the past year, and eventually started enjoying the idea behind every line of code. Now, as professionally connected with the software industry, I am interested in the front-end scope and free of new opportunities."
        )}
      </Text>

      <Text 
        maxW="50rem"
        mb="1rem"
      >
        {lenguage ? (
          "Sou um grande fã de animações, transições, cores, sombras e coisas assim. Acho que tudo somado a um espaço vazio pode dar uma perspectiva única nos sites."
        ) : (
          "I'm a big fan of animations, transitions, colors, shadows and things like that. I think everything added up to an empty space can give a unique perspective on websites."
        )}
      </Text>
    </>
  );
};