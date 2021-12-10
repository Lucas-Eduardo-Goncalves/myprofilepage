import React from 'react';

import { Text, Accordion, AccordionItem, AccordionButton, Link, AccordionIcon, AccordionPanel } from '@chakra-ui/react';

interface dataProps {
  name: string;
  description: string;
  repoLink: string;
}

interface ArticlePanelProps {
  data: dataProps[]
}

export const ArticlePanel: React.FC<ArticlePanelProps> = ({ data }) => {
  return (
    <Accordion allowToggle flex="1" h="50vh">
      {data.map(item => (
        <AccordionItem key={item.name}>
            <AccordionButton _focus={{}} flex="1">
              <Text as="h2" fontSize={["0.8rem", "1rem"]}>
                {item.name}
              </Text >

              <AccordionIcon ml="auto"/>
            </AccordionButton>
          <AccordionPanel pb={4}>
            <Text fontSize={["0.8rem", "1rem"]}>
              {item.description}
            </Text >
           
            <br/>
            <Link href={item.repoLink} color="blue.500" target="_blank" fontSize={["0.6rem", "0.8rem", "1rem"]}>
              Link Para o artigo.
            </Link>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};