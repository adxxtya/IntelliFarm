import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function farm () {
  return (
      <div>
           <Box
          h="100vh"
          w="100%"
          position="relative"
    >
          <Flex
              bg="green.300"
              h="20vh"
          >
              Hiasd
          </Flex>
          <Flex
              position="absolute"
              bottom="0"
              w="100%"
              h="80vh"
              justifyContent="center"
          >
              Hi
          </Flex>
    </Box>
    </div>
  )
}
