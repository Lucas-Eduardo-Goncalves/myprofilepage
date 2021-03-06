import React from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

import { FrontEndPanel } from './FrontEndPanel';
import { ArticlePanel } from './ArticlePanel';

import { useCollection } from '@nandorojo/swr-firestore';
import { useLenguage } from '../../../../hooks/useLenguage';
import { CertificationPanel } from './CertificationPanel';

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

interface DataCertificationProps {
  name: string;
  sent: string;
  image: string;
}

export const MyTab: React.FC = () => {
  const { data: DataProjects } = useCollection<DataProjectProps>('projects', {    
    listen: true, 
    orderBy: ['published_at', 'desc'],
  });

  const { data: DataArticle } = useCollection<DataArticleProps>('articles', {listen: true});

  const { data: DataCertifications } =  useCollection<DataCertificationProps>('certifications', {listen: true});

  const { lenguage } = useLenguage();

  return (
    <Tabs colorScheme="purple" variant='soft-rounded'>
      <TabList mt="1rem">
        <Tab _focus={{}} fontSize={["0.7rem", "1rem"]}>Frontend</Tab>
        <Tab _focus={{}} fontSize={["0.7rem", "1rem"]}>{lenguage ? "Certificados" : "Certificate"}</Tab>
        <Tab _focus={{}} fontSize={["0.7rem", "1rem"]}>{lenguage ? "Artigos" : "Articles"}</Tab>
      </TabList>

      <TabPanels mt="1rem">
        <TabPanel p="0">
          {DataProjects && <FrontEndPanel data={DataProjects} />}
        </TabPanel>

        <TabPanel p="0">
          {DataCertifications && <CertificationPanel data={DataCertifications} />}
        </TabPanel>

        <TabPanel p="0">
          {DataArticle && <ArticlePanel data={DataArticle} />}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};