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
          <h2>
            <AccordionButton _focus={{}}>
                <Text>
                  {item.name}
                </Text>
                <Link href={item.repoLink} target="_blank" ml="auto" textAlign='left'>
                  Link Para o artigo.
                </Link>
            
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {item.description}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};