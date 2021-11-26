import React from 'react';

import { Flex, Heading, Img } from '@chakra-ui/react';

export const MyRepo: React.FC = () => {
  return (
    <Flex
      id="repostats"
      direction="column"
      minH="100vh"
    >
      <Heading 
        color="purple.300"  
        fontSize="3rem"  
      >
        Repository Stats
      </Heading>

      <Flex
        align="center"
        justify="space-evenly"
        mt="2rem" 
      >
        <Img 
          h="15rem" 
          src="https://github-readme-stats.vercel.app/api?username=Lucas-Eduardo-Goncalves&show_icons=true&theme=jolly&include_all_commits=true&count_private=true"
        />

        <Img 
          h="15rem"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lucas-Eduardo-Goncalves&layout=compact&langs_count=7&theme=jolly"
        />
      </Flex>
      
    </Flex>
  );
}