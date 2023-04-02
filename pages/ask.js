import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Input,
  Button,
  Box,
  Flex,
  extendTheme,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

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

  const farmerPrompts = [
    "How can I improve the fertility of my soil?",
    "What crops are best suited for my climate?",
    "How can I control pests and diseases in my crops without using harmful chemicals?",
    "What are the best practices for crop rotation?",
    "How can I conserve water when irrigating my crops?",
    "What is the best way to manage weeds on my farm?",
    "How can I prevent erosion on my fields?",
    "What are the benefits of using cover crops?",
    "What is the best way to store and preserve my crops?",
    "How can I increase my farm's profitability?",
    "What are some effective marketing strategies for small farms?",
    "How can I reduce my farm's carbon footprint?",
    "What are some good resources for finding grants for farming projects?",
    "How can I get started with organic farming?",
    "What are some common mistakes to avoid when starting a new farm?",
    "How can I attract beneficial insects to my crops?",
    "What are some natural ways to fertilize my soil?",
    "What are some effective ways to control soil erosion?",
    "What are some common crop diseases and how can I prevent them?",
    "How can I use technology to improve my farm's productivity?",
    "What are some good resources for learning about sustainable farming practices?",
    "What are some ways to prevent soil compaction?",
    "How can I ensure the health of my livestock?",
    "What are some effective ways to control livestock parasites?",
    "How can I design a farm that maximizes efficiency and productivity?",
    "How can I make my farm more energy-efficient?",
    "What are some effective ways to manage farm waste?",
    "How can I improve my crop yields?",
    "What are some effective ways to control crop pests?",
    "How can I ensure the quality of my crops?",
    "What are some ways to prevent soil erosion on hillsides?",
    "How can I use natural pest control methods on my farm?",
    "What are some effective ways to manage weeds in my crops?",
    "What are some good resources for learning about regenerative farming practices?",
    "How can I attract pollinators to my crops?",
    "What are some effective ways to manage irrigation on my farm?",
    "How can I ensure the safety of my food products?",
    "What are some good resources for finding agricultural jobs or internships?",
    "How can I improve the biodiversity on my farm?",
    "What are some effective ways to manage grazing on my farm?",
    "How can I use compost to improve my soil?",
    "What are some ways to prevent soil erosion caused by water?",
    "How can I improve my farm's soil health?",
    "What are some effective ways to control deer damage to my crops?",
    "How can I use green manure to improve my soil?",
    "What are some effective ways to manage pests in my greenhouse?",
    "What are some good resources for learning about permaculture practices?",
    "How can I ensure the quality and safety of my farm equipment?",
    "What are some effective ways to control bird damage to my crops?",
    "How can I use crop rotation to improve my soil?",
    "What are some effective ways to manage irrigation on a slope?",
    "How can I ensure the health of my bees?",
    "What are some good resources for finding funding for farming projects?",
    "How can I improve my farm's biodiversity?",
    "What are some effective ways to manage manure on my farm?",
    "How can I use natural methods to control aphids on my crops?",
  ];

  const prompts = farmerPrompts.sort(() => Math.random() - 0.5).slice(0, 9);

  return (
    <Box h="100vh" w="100%">
      <Flex
        h="20vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        Navbar
      </Flex>
      <Flex
        h="80vh"
        w="100%"
        justifyContent="center"
        alignItems="flex-end"
        position="relative"
      >
        <Flex position="absolute" left="10" w="100%" h="100%" mb="80px">
          <Flex
            w="50%"
            justifyContent="center"
            alignItems="center"
            direction="column"
            whiteSpace="normal"
            flexWrap="wrap"
          >
            <Flex>
              {prompts.slice(0, 3).map((prompt) => (
                <Flex
                  border="2px solid"
                  h="auto"
                  p={4}
                  m={2}
                  direction="column"
                  borderRadius={25}
                  alignItems="center"
                  justifyContent="space-between"
                  maxW="180px"
                  minW="180px"
                >
                  {prompt}
                </Flex>
              ))}
            </Flex>

            <Flex>
              {prompts.slice(0, 3).map((prompt) => (
                <Flex
                  border="2px solid"
                  h="auto"
                  p={4}
                  m={2}
                  direction="column"
                  borderRadius={25}
                  alignItems="center"
                  justifyContent="space-between"
                  maxW="180px"
                  minW="180px"
                >
                  {prompt}
                </Flex>
              ))}
            </Flex>

            <Flex>
              {prompts.slice(0, 3).map((prompt) => (
                <Flex
                  border="2px solid"
                  h="auto"
                  p={4}
                  m={2}
                  direction="column"
                  borderRadius={25}
                  alignItems="center"
                  justifyContent="space-between"
                  maxW="180px"
                  minW="180px"
                >
                  {prompt}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Image
          src="/assets/farmer-black-white-3.jpg"
          width={800}
          height={800}
          alt="farmer"
        />
        <Flex position="absolute" w="100%" justifyContent="center" bottom={6}>
          <Flex
            border="2px solid"
            h="60px"
            w="80%"
            borderRadius={100}
            justifyContent="space-between"
            alignItems="center"
            padding="10"
            fontWeight="600"
          >
            <Input h="60px" bg="white" variant="customTheme" fontSize="24px" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
