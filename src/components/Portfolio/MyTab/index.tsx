import React from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel, Center } from '@chakra-ui/react';

import { FrontEndPanel } from './FrontEndPanel';
import { useCollection } from '@nandorojo/swr-firestore';
import { useLenguage } from '../../../hooks/useLenguage';

interface DataProps {
  description: string;
  name: string;
  image: string;
  repoLink: string;
  projectLink: string;
  tools: string[];
}

export const MyTab: React.FC = () => {
  const { data } = useCollection<DataProps>('projects', {listen: true});
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
        <TabPanel>
          {data && <FrontEndPanel data={data} />}
        </TabPanel>

        <TabPanel>
          <Center
            h="50vh"
          >
            Nada até o momento
          </Center>
        </TabPanel>

        <TabPanel>
          <Center
            h="50vh"
          >
            Nada até o momento
          </Center>
        </TabPanel>

        <TabPanel>
          <Center
            h="50vh"
          >
            Nada até o momento
          </Center>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};