import { Flex, Text } from '@chakra-ui/react';

export const LicenceTextEN = () => (
  <Flex 
    direction="column" 
    bg="purple.600" 
    p="1rem" 
    borderRadius="1rem" 
    maxW="55rem"
  >
    <Text mb="0.5rem">
      MIT License
    </Text>
    <Text mb="0.5rem">
      Copyright (c) 2021 Lucas-Eduardo-Goncalves
    </Text>

    <Text mb="0.5rem">
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
    </Text>

    <Text mb="0.5rem">
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
    </Text>

    <Text>
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    </Text>
  </Flex>
);