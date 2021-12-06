import React from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel, Center } from '@chakra-ui/react';

import { FrontEndPanel } from './FrontEndPanel';
import { ArticlePanel } from './ArticlePanel';

import { useCollection } from '@nandorojo/swr-firestore';
import { useLenguage } from '../../../../hooks/useLenguage';

interface DataProjectProps {
  description: string;
  name: string;
  image: string;
  repoLink: string;
  projectLink: string;
  tools: string[];
}

interface DataArticleProps {
  name: string;
  description: string;
  repoLink: string;
}

export const MyTab: React.FC = () => {
  const { data: DataProjects } = useCollection<DataProjectProps>('projects', {listen: true});
  const { data: DataArticle } = useCollection<DataArticleProps>('articles', {listen: true});
  const { lenguage } = useLenguage();

  return (
    <Tabs colorScheme="purple" variant='soft-rounded'>
      <TabList mt="1rem">
        <Tab _focus={{}}>Front-End</Tab>
        <Tab _focus={{}}>Back-End</Tab>
        <Tab _focus={{}}>Mobile</Tab>
        <Tab _focus={{}}>{lenguage ? "Artigos" : "Articles"}</Tab>
      </TabList>

      <TabPanels mt="1rem">
        <TabPanel p="0">
          {DataProjects && <FrontEndPanel data={DataProjects} />}
        </TabPanel>

        <TabPanel p="0">
          <Center
            h="50vh"
          >
            Nada até o momento
          </Center>
        </TabPanel>

        <TabPanel p="0">
          <Center
            h="50vh"
          >
            Nada até o momento
          </Center>
        </TabPanel>

        <TabPanel p="0">
          {DataArticle && <ArticlePanel data={DataArticle} />}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};