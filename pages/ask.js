import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Input, Button, Box, Flex, extendTheme, Radio, RadioGroup, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Image from 'next/image'

export default function Ask() {

    const customTheme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        outline: "none",
        boxShadow: "none",
        borderColor: "gray.300",
        _focus: {
          boxShadow: "none",
          borderColor: "gray.300",
        },
      },
    },
  },
    });
    
  const options = ["Sandy Soil", "Silt Soil", "Clay Soil", "Loamy Soil"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

    return (
        <Box
            h="100vh"
            w="100%"
        >
            <Flex
                h="20vh"
                w="100%"
                justifyContent="center"
                alignItems="center"
                position="relative"
            >
                <Flex bg="white" border="2px solid" h="80px" w="80%" borderRadius={100} justifyContent="space-between" alignItems="center" padding="12" fontWeight="600">
                    <Text>Home</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                </Flex>
            </Flex>
            <Flex
                h="80vh"
                w="100%"
                justifyContent="center"
                alignItems="flex-end"
                position="relative"
            >
                <Flex position="absolute" left="0" w="100%" h="100%" mb="60px">
                    <Flex w="50%" justifyContent="center" alignItems="center">
                          <Flex
          border="2px solid"
          w="50%"
          h="auto"
          p={4}
          direction="column"
          borderRadius={25}
          alignItems="center"
                            justifyContent="space-between"
                        >
                          <Text textAlign="center">  You can additionally add some more options </Text>
          {options.map((option) => (
            <Box
              key={option}
              sx={{
                borderBottom: "2px solid",
                  borderRadius: "8",
                padding: "3",
                width: "100%",
                cursor: "pointer",
                backgroundColor:
                  selectedOption === option ? "gray.200" : "transparent",
              }}
              py={2}
              onClick={() => handleOptionClick(option)}
            >
              <Text>{option}</Text>
            </Box>
          ))}
        </Flex>
                    </Flex>
                </Flex>
                <Image src="/assets/farmer-black-white-2.jpg" width={1000} height={1000} alt='farmer' />
                <Box
                    position="absolute"
                    bg="green"
                    bottom="20"
                    width="75%"
                    h="24px"
                >
                    <Input
                        h="48px"
                        bg="white"
                        variant="customTheme"
                    />
                </Box>
            </Flex>
        </Box>
  )
}

