import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
  } from '@chakra-ui/react';

  export default function HeroBanner() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={`url(https://teachyourkidscode.com/wp-content/uploads/2018/10/binary-numbers-worksheet-1024x683.jpg)`}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.900,blackAlpha.900, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Heading
              color={'white'}
              fontWeight={600}
              fontSize={{ base: '1xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
               Hi, I am Hoda...
            </Heading>
            <Text
              color={'white'}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}>
              A look into my journey as a developer
            </Text>
            <Stack direction={'row'} p={5}>
              <Button
                bg={'purple.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'purple.500' }}>
                See my projects
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Vist my github
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }