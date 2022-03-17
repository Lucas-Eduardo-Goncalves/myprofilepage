import { Flex, Text } from '@chakra-ui/react';

export const LicenceTextPT = () => (
  <Flex 
    direction="column" 
    bg="purple.600" 
    p="1rem" 
    borderRadius="1rem" 
    maxW="60vw"
  >
    <Text mb="0.5rem">
      Licença MIT
    </Text>
    <Text mb="0.5rem">
      Copyright (c) 2021 Lucas-Eduardo-Goncalves
    </Text>

    <Text mb="0.5rem">
      A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia
      deste software e arquivos de documentação associados (o "Software"), para lidar
      no Software sem restrição, incluindo, sem limitação, os direitos
      usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
      cópias do Software, e para permitir que as pessoas a quem o Software é
      mobilado para o fazer, nas seguintes condições:
    </Text>

    <Text mb="0.5rem">
      O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todos os
      cópias ou partes substanciais do Software.
    </Text>

    <Text>
      O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
      IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
      ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUM CASO A
      AUTORES OU DETENTORES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTROS
      RESPONSABILIDADE, SEJA EM UMA AÇÃO DE CONTRATO, ATO ILÍCITO OU DE OUTRA FORMA, DECORRENTE DE,
      FORA OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
      PROGRAMAS.
    </Text>
  </Flex>
);