import { useEffect, useState } from "react";
import { Box, Flex, Icon, Text, Textarea } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMicrophone } from 'react-icons/fa';
import { GrNext, GrPrevious } from 'react-icons/gr'


export default function Home() {
  const farmerPrompts = [
    "How can I improve the fertility of my soil?",
    "What crops are best suited for my climate?",
    "What are the best practices for crop rotation?",
    "How can I conserve water when irrigating my crops?",
    "What is the best way to manage weeds on my farm?",
    "How can I prevent erosion on my fields?",
    "What are the benefits of using cover crops?",
    "What is the best way to store and preserve my crops?",
    "How can I increase my farm's profitability?",
    "What are some effective marketing strategies for small farms?",
    "How can I reduce my farm's carbon footprint?",
    "How can I get started with organic farming?",
    "How can I attract beneficial insects to my crops?",
    "What are some natural ways to fertilize my soil?",
    "What are some effective ways to control soil erosion?",
    "What are some common crop diseases and how can I prevent them?",
    "How can I use technology to improve my farm's productivity?",
    "What are some ways to prevent soil compaction?",
    "How can I ensure the health of my livestock?",
    "What are some effective ways to control livestock parasites?",
    "How can I make my farm more energy-efficient?",
    "What are some effective ways to manage farm waste?",
    "How can I improve my crop yields?",
    "What are some effective ways to control crop pests?",
    "How can I ensure the quality of my crops?",
    "What are some ways to prevent soil erosion on hillsides?",
    "How can I use natural pest control methods on my farm?",
    "What are some effective ways to manage weeds in my crops?",
    "How can I attract pollinators to my crops?",
    "What are some effective ways to manage irrigation on my farm?",
    "How can I ensure the safety of my food products?",
    "How can I improve the biodiversity on my farm?",
    "What are some effective ways to manage grazing on my farm?",
    "How can I use compost to improve my soil?",
    "What are some ways to prevent soil erosion caused by water?",
    "How can I improve my farm's soil health?",
    "What are some effective ways to control deer damage to my crops?",
    "How can I use green manure to improve my soil?",
    "What are some effective ways to manage pests in my greenhouse?",
    "How can I ensure the quality and safety of my farm equipment?",
    "What are some effective ways to control bird damage to my crops?",
    "How can I use crop rotation to improve my soil?",
    "What are some effective ways to manage irrigation on a slope?",
    "How can I ensure the health of my bees?",
    "How can I improve my farm's biodiversity?",
    "What are some effective ways to manage manure on my farm?",
    "How can I use natural methods to control aphids on my crops?",
  ];

  const [inputValue, setInputValue] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % farmerPrompts.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + farmerPrompts.length) % farmerPrompts.length
    );
  };

  const getRandomPrompts = () => {
    const startIndex = currentSlide;
    const endIndex = Math.min(startIndex + 4, farmerPrompts.length);
    const randomPrompts = farmerPrompts.slice(startIndex, endIndex).map(() => {
      const randomIndex = Math.floor(Math.random() * farmerPrompts.length);
      return farmerPrompts[randomIndex];
    });
    return randomPrompts;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    axios
      .post("YOUR_NODEJS_SERVER_URL", { content: inputValue })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Slide = ({ prompt, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      border="1px solid"
      borderRadius="8px"
      h="80%"
      w="20%"
      p="10px"
      onClick={onClick}
      css={{ wordWrap: "break-word", overflow: "hidden", maxWidth: "20%" }}
    >
      <Text>{prompt}</Text>
    </motion.div>
  );
  };
  
  const handleClickSlide = (prompt) => {
    setInputValue(prompt);
  };


  return (
    <Flex
      h="100vh"
      w="100%"
      bg="teal.100"
      justifyContent="center"
      alignItems="center"
    >
      <Flex h="100vh" w="80%" bg="orange.200" direction="column">
        <Flex bg="red.300" h="10vh">
          Navbar
        </Flex>
        <Flex
          bg="blue.300"
          h="78vh"
          maxH="auto"
          overflowY="auto"
          paddingY="20px"
          paddingX="10px"
          scrollBehavior="smooth"
          direction="column"
        >
          <Flex
            h="26vh"
            w="100%"
            alignItems="center"
            justifyContent="center"
            gap="8px"
          >
            <Button p="8px" borderRadius="50" leftIcon={<GrPrevious />} onClick={handlePrevSlide} iconSpacing={1} />
            {getRandomPrompts().map((prompt, index) => (
              <Flex
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                border="1px solid"
                borderRadius="8px"
                key={index}
                h="80%"
                w="20%"
                p="10px"
                css={{
                  wordWrap: "break-word",
                  overflow: "hidden",
                  maxWidth: "20%",
                }}
              >
                <Slide key={index} onClick={() => handleClickSlide(prompt)} prompt={prompt} />
              </Flex>
            ))}
            <Button p="8px" borderRadius="50" rightIcon={<GrNext />} onClick={handleNextSlide}  iconSpacing={1} />
          </Flex>
          <Flex h="26vh" w="100%" bg="purple.100" p="8px">
              Hi
          </Flex>
          <Flex h="26vh" w="100%" bg="orange.300" gap="3" justifyContent="center" alignItems="center" direction="column">
            <Flex bg="white" p="20px" borderRadius="50">    
            <Icon as={FaMicrophone} boxSize={8} />
            </Flex> 
            Or Record Here...
            </Flex>
        </Flex>
        <Flex bg="green.300" h="12vh" alignItems="center" p="10px" gap={2}>
          <Textarea
            bg="white"
            fontSize="24px"
            w="90%"
            resize="vertical"
            size="sm"
            placeholder="Here is a sample placeholder"
            onChange={handleInputChange}
            value={inputValue}
          />
          <Button type="submit" h="90%" onClick={handleClick}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
