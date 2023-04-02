import { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Textarea,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMicrophone } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

import Image from "next/image";

export default function Home() {
  const farmerPrompts = [
    "Mere mitti ki urvarata ko kaise badhaya ja sakta hai?",
    "Mere mausam ke liye kaunse fasal sabse acchi hai?",
    "Crop rotation ke liye sabse acche tarike kya hai?",
    "Main kheton ki sinchai karte samay jal ki bachat kaise kar sakta hun?",
    "Mere kheton par jhadiyon ko kaise niyantrit kiya ja sakta hai?",
    "Main apne kshetron mein jamin ki kheechav kaise rok sakta hun?",
    "Cover crops use karne ke kya fayde hain?",
    "Mere fasalon ko kaise store aur preserve kiya ja sakta hai?",
    "Main apne khet ki munafahej kaise bada sakta hun?",
    "Chote kisanon ke liye kya prabhavi marketing strategies hain?",
    "Main apne kheton ki carbon footprint kaise kam kar sakta hun?",
    "Main organic farming se kaise shuruat kar sakta hun?",
    "Main apne fasalon ke liye faydemand keetanuon ko kaise attract kar sakta hun?",
    "Mitti ko natural tarike se kaise urvarak diya ja sakta hai?",
    "Jamin ki kheechav ko kaise niyantrit kiya ja sakta hai?",
    "Kuch common crop diseases hain aur inhe kaise roka ja sakta hai?",
    "Main technology ka istemal kar ke apne kheton ki productivity kaise badha sakta hun?",
    "Mitti ki gati ko rokne ke kuch tarike kya hain?",
    "Main apne pashuon ke svasthy ko kaise surakshit kar sakta hun?",
    "Pashuon ke kitanuon ko niyantrit karne ke kuch prabhavi tarike kya hain?",
    "Main apne kheton ki energy efficiency kaise badha sakta hun?",
    "Kheton ki kachra niyantran ke kuch prabhavi tarike kya hain?",
    "Mere fasalon ki paidavar kaise badhayi ja sakti hai?",
    "Fasalon ke keetanuon ko kaise niyantrit kiya ja sakta hai?",
    "Mere fasalon ki quality ko kaise surakshit kiya ja sakta hai?",
    "Hillside mein jamin ki kheechav ko kaise roka ja sakta hai?",
    "Apne kheton par prakritik keetanuon ka istemal kaise kiya ja sakta hai?",
    "Fasalon mein jhadiyon ko niyantrit karne ke kuch prabhavi tarike kya hain?",
    "Mere fasalon ko pollinators kaise attract kiya ja sakta hai?",
    "Kheton ki sinchai ko kaise niyantrit kiya ja sakta hai?",
    "Main apne khadya utpaadon ki suraksha kaise surakshit kar sakta hun?",
    "Main apne kheton ki jeev-jantu vividhta ko kaise badha sakta hun?",
    "Mere kshetron mein chara kaise prabandhit kiya ja sakta hai?",
  ];

  const [inputValue, setInputValue] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);
  const [responsePage, setResponsePage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState({});
  const [soil, setSoil] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [type, setType] = useState("");
  const inputRef = useRef()
  

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

  const handleRadioClickType = (value) => {
    setType(value);
  };

  const handleRadioClickSoil = (value) => {
    setSoil(value);
  };
  const handleRadioClickCity = (value) => {
    setCity(value);
  };
  const handleRadioClickWeather = (value) => {
    setWeather(value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleSoilChange = (event) => {
    setSoil(event.target.value);
  };
  const handleWeatherChange = (event) => {
    setCity(event.target.value);
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

  const handleClick = async () => {
    const inputValue2 = inputRef.current.value
    const result = await fetch("https://intellifarm-backend.onrender.com/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        geo: city,
        q: inputValue2,
        info: { type: type, soil: soil, weather: weather },
      }),
    });

    if (result.success) {
      setIsResponseSuccess(true);
      setResponsePage(true);
      setLoader(true);
    }

    const response = await result.json();
    setResponse(response);
    setResponsePage(true);
  };

  console.log(response);


  const handleClickSlide = (prompt) => {
    inputRef.current.value = prompt
  };

  const finalQuery =
    "I am a farmer. ${geo && ` I am from ${geo}.`}. My question is, ${q} ?. ${info.soil && `Also consider My soil type is ${info.soil}.`}, ${weather && weather is ${info.weather}} and ${type && type of plant is ${info.type}}. ${geo && consider the current and future weather of ${geo}} and soil minerals. Give me the response in list form only. without any prefix and postfix. max 10 responses. Response should add the soil realated properties such as color, texture, structure, porosity, density, consistence, aggregate stability, minerals, PH level, temperature (only if necessary and add prefix soil properties.). Give me only one answer yes OR no once if the question is of type closed question (for example: yes.) Also tell me the temperature, pressure and humidity of ${geo} in Temperature: 26°C format. Also give me a suggestion related to future says suggestion: the suggestion. Also give me one pro tip says pro tip: the tip. Try to use future tense. Respone should strictly be in the language of the question ";

  return (
    <>
      <Flex
        h="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
        fontWeight="400"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/random/500x500?sig=1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
        }}
        color="white"
        overflow="hidden"
        overscroll="none"
        zIndex="-2"
      >
        <Flex
          h="100vh"
          w="80%"
          direction="column"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.2)0%, rgba(255, 255, 255, 0.2) 100%)",
            backdropFilter: "blur(20px) brightness(0.7)",
            filter: "brightness(1)",
            zIndex: 0,
          }}
        >
          <Flex
            h="8vh"
            w="100%"
            ml="2"
            alignItems="flex-end"
            mt="16px"
            position="absolute"
            zIndex="2"
            type
          >
            <Image src="/assets/farmer-logo.webp" width={60} height={40} />
            <Text fontSize="32px">IntelliFarm</Text>
          </Flex>

          {!responsePage ? (
            <>
              <Flex
                zIndex="2"
                h="78vh"
                maxH="auto"
                overflowY="auto"
                paddingY="20px"
                paddingX="10px"
                scrollBehavior="smooth"
                direction="column"
                mt="6vh"
              >
                <Text
                  w="100%"
                  fontSize="24px"
                  mb="-14px"
                  mt="18px"
                  textAlign="center"
                >
                  You can directly choose a random prompt from here
                </Text>
                <Flex
                  h="30vh"
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                  gap="8px"
                >
                  <Button
                    p="8px"
                    borderRadius="50"
                    leftIcon={<GrPrevious />}
                    onClick={handlePrevSlide}
                    iconSpacing={1}
                  />
                  {getRandomPrompts().map((prompt, index) => (
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                      border="1px solid"
                      borderRadius="8px"
                      key={index}
                      h="60%"
                      w="20%"
                      p="10px"
                      css={{
                        wordWrap: "break-word",
                        overflow: "hidden",
                        maxWidth: "20%",
                        transition: "box-shadow 0.3s ease-in-out",
                        ":hover": {
                          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                        },
                      }}
                    >
                      <Slide
                        key={index}
                        onClick={() => handleClickSlide(prompt)}
                        prompt={prompt}
                      />
                    </Flex>
                  ))}
                  <Button
                    p="8px"
                    borderRadius="50"
                    rightIcon={<GrNext />}
                    onClick={handleNextSlide}
                    iconSpacing={1}
                  />
                </Flex>

                <Flex h="34vh" w="100%" p="16px" direction="column" alignItems="center">
                  <Text w="100%" fontSize="24px" mb="10px" textAlign="center">
                    You can additionally add some more options:
                  </Text>
                  <Flex
                    w="70%"
                    h="100%"
                    border="1px solid"
                    borderRadius="8"
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Flex direction="column" w="100%" borderRight="1px solid">
                      <Text textAlign="center" fontSize="24px">
                        Type
                      </Text>
                      <RadioGroup onChange={handleRadioClickType}>
                        <Flex direction="column" justifyContent="center" pl="4">
                          <Radio value="Crops">Crops</Radio>
                          <Radio value="Plants">Plants</Radio>
                          <Radio value="Trees">Trees</Radio>
                          <Radio value="Flowers">Flowers</Radio>
                          <Input
                            variant="flushed"
                            placeholder="other types..."
                            _placeholder={{ color: "white" }}
                            w="90%"
                            onChange={handleTypeChange}
                            value={type}
                          />
                        </Flex>
                      </RadioGroup>
                    </Flex>
                    <Flex direction="column" w="100%" borderRight="1px solid">
                      <Text textAlign="center" fontSize="24px">
                        Weather
                      </Text>
                      <RadioGroup onChange={handleRadioClickWeather}>
                        <Flex direction="column" justifyContent="center" pl="4">
                          <Radio value="Sunny">Sunny</Radio>
                          <Radio value="Rainy">Rainy</Radio>
                          <Radio value="Humid">Humid</Radio>
                          <Radio value="Frosty">Frosty</Radio>
                          <Input
                            variant="flushed"
                            placeholder="others weathers..."
                            _placeholder={{ color: "white" }}
                            w="90%"
                            onChange={handleWeatherChange}
                            value={weather}
                          />
                        </Flex>
                      </RadioGroup>
                    </Flex>
                    <Flex direction="column" w="100%" borderRight="1px solid">
                      <Text textAlign="center" fontSize="24px">
                        City
                      </Text>
                      <RadioGroup onChange={handleRadioClickCity}>
                        <Flex direction="column" justifyContent="center" pl="4">
                          <Radio value="Mumbai">Mumbai</Radio>
                          <Radio value="Bengaluru">Bengaluru</Radio>
                          <Radio value="Delhi">Delhi</Radio>
                          <Radio value="Hyderabad">Hyderabad</Radio>
                          <Input
                            variant="flushed"
                            placeholder="other cities..."
                            w="90%"
                            _placeholder={{ color: "white" }}
                            onChange={handleCityChange}
                            value={city}
                          />
                        </Flex>
                      </RadioGroup>
                    </Flex>
                    <Flex direction="column" w="100%">
                      <Text textAlign="center" fontSize="24px">
                        Soil
                      </Text>
                      <RadioGroup onChange={handleRadioClickSoil}>
                        <Flex direction="column" justifyContent="center" pl="4">
                          <Radio value="Loamy soil">Loamy soil</Radio>
                          <Radio value="Clay Soil">Clay Soil</Radio>
                          <Radio value="Red Soil">Red Soil</Radio>
                          <Radio value="Laterite Soil">Laterite Soil</Radio>
                          <Input
                            variant="flushed"
                            placeholder="other soil..."
                            w="90%"
                            _placeholder={{ color: "white" }}
                            onChange={handleSoilChange}
                            value={soil}
                          />
                        </Flex>
                      </RadioGroup>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </>
          ) : (
            <>
              <Flex
                h="100vh"
                w="100%"
                direction="column"
                position="relative"
                justifyContent="center"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.2)0%, rgba(255, 255, 255, 0.2) 100%)",
                  backdropFilter: "blur(10px) brightness(0.8)",
                  filter: "brightness(1)",
                  zIndex: 0,
                }}
              >
                <Flex
                  w="100%"
                  direction="column"
                  position="relative"
                  justifyContent="center"
                  p="4"
                  h="auto"
                    maxH="65%"  
                    overflow="scroll"
                 _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.2)0%, rgba(0, 0, 0, 0.2) 100%)",
                    backdropFilter: "blur(20px) brightness(0.7)",
                    filter: "brightness(1)",
                    zIndex: 0,
                  }}
                >
                  <Text fontSize="24px" w="95%" overflowY="auto" ml="5" px="24px" zIndex="100">
                    {response.text &&
                      response.text
                        .split("\n")
                        .map((line, index) => <Text key={index}>{line}</Text>)}
                  </Text>
                </Flex>
                <Flex
                  zIndex="100"
                  w="100%"
                  h="10%"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                      onClick={() => { setResponsePage(false);  inputRef.current.value = ""}}
                    bg="blackAlpha.700"
                    _hover={{ bg: "blackAlpha.600" }}
                  >
                    Go Back
                  </Button>
                </Flex>
              </Flex>
            </>
          )}
          <Flex
            h="12vh"
            w="100%"
            alignItems="center"
            p="10px"
            gap={2}
            position="absolute"
            bottom="6"
          >
            <Input
              type="text"
              bg="#252529"
              color="white"
              border="2px solid #505055"
              height="40px"
              fontSize="18px"
              ref={inputRef}
                            _hover={{
                bg: "#454548"
                            }}
                            _active={{
                bg: "#353538"
              }}
            />
            <Button
              type="submit"
              h="40px"
              w="40px"
              bg="#252529"
              color="white"
              border="2px solid #505055"
              padding="10px"
              onClick={handleClick}
              _hover={{
                bg: "#454548"
              }}
            >
              <FiSend size="40px" color="#adadb7" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
