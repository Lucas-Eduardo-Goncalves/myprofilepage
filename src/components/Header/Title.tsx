import { Heading } from '@chakra-ui/react';

interface TitleProps { name: string };

export const Title = ({ name }: TitleProps) => (
  <Heading 
    as="h1"
    fontSize={['2rem' , '3rem', '4rem']}
  >
    {name}
  </Heading>
);