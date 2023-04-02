import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Textarea,
  Radio,
  RadioGroup,
  border,
  SelectField,
  MenuItem,
  Select
} from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMicrophone } from "react-icons/fa";
import { FiSend} from "react-icons/fi";

import { GrNext, GrPrevious } from "react-icons/gr";
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
  "Mere kshetron mein chara kaise prabandhit kiya ja sakta hai?"
]

  const [inputValue, setInputValue] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isResponseSuccess, setIsResponseSuccess] = useState(false);
  const [response, setResponse] = useState({})

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

  const handleClick = async () => {
    const result = await fetch(
      "https://intellifarm-backend.onrender.com/ask",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ geo: "pune",q: inputValue }),
      }
    );

    if (result.ok) {
      setIsResponseSuccess(true);
    }

    const response = await result.json();
    setResponse(response)
    console.log(response);
    console.log(Boolean(response));
  };
  
  const handleRadioClick = (value) => {
    console.log(value);
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

  console.log(response);

  const handleClickSlide = (prompt) => {
    setInputValue(prompt);
  };

  return (
    <>
    <Flex
      h="100vh"
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg="#0f0f0f"
      color="white"
    >
      <Flex h="100vh" w="80%" direction="column">
        

		<Flex h="10vh" w="100vw" alignItems="center" bgColor="#202023" left="0" position="absolute" paddingX="50px" paddingY="10px">
            <Image src="/assets/farmer-logo.webp" width={45} height={10}/>
            <Text marginLeft="10px" fontSize="25px">IntelliFarm</Text>
			<Select position="absolute" right='20px' placeholder='select city' width="15%" height="30px" border='0' color='white' bgColor="#151518" >
				<option value="pune">Pune</option>
				<option value="delhi">Delhi</option>
				<option value="mumbai">Mumbai</option>
				<option value="kolkata">Kolkata</option>
				<option value="chennai">Chennai</option>				
			</Select>
		</Flex>
            {true ? <>
            <Flex
            h="78vh"
            maxH="auto"
            overflowY="auto"
            paddingY="20px"
            paddingX="10px"
            scrollBehavior="smooth"
            direction="column"
            mt="8vh"
          >
              <Text w="100%" fontSize="20px" mb="10px" mt="20px" textAlign="center">
                You can directly choose a prompt from here
              </Text>
			  <Flex
			  alignItems="center"
			  >
				<Button
                  p="8px"
                  borderRadius="50"
                  leftIcon={<GrPrevious />}
                  onClick={handlePrevSlide}
                  iconSpacing={1} 
				  m='10px'
				  bgColor="#c7c9c8"
				  />
				<Flex
					m='10px'
					w="100%"
					alignItems="center"
					justifyContent="center"
					gap="15px"
					display="grid"
					gridTemplateColumns="1fr 1fr"
              >
                
                {getRandomPrompts().map((prompt, index) => (
                  <Flex
                    alignItems="center"
                    cursor="pointer"
                    textAlign="center"
					bg="#202022"
					color="white"
					border="2px solid #505055"
                    borderRadius="8px"
                    key={index}
                    h="30px"
                    w="100%"
                    p="15px"
					overflow="hidden"
					whiteSpace="nowrap"
					textOverflow="ellipsis"
                    css={{
						transition: "box-shadow 0.3s ease-in-out",
                      ":hover": {
                        boxShadow: "0px 0px 10px black",
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
                
              </Flex>
			  <Button
                  p="8px"
                  borderRadius="50"
                  rightIcon={<GrNext />}
                  onClick={handleNextSlide}
                  iconSpacing={1} 
				  m='10px'
				  bgColor="#c7c9c8"
				 
				  />
			  </Flex>
			  
              
			  
              <Flex h="34vh" w="100%" p="16px" direction="column">
                <Text w="100%" fontSize="24px" mb="10px" textAlign="center">
                  You can additionally add some more options:
                </Text>
                <Flex
                  w="100%"
                  h="100%"
                  border="1px solid"
                  borderRadius="8"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Flex direction="column" w="100%" borderRight="1px solid">
                    <Text textAlign="center" fontSize="20px">
                      Type
                    </Text>
                    <RadioGroup onChange={handleRadioClick}>
                      <Flex direction="column" justifyContent="center" pl="4">
                        <Radio value="Crops">Crops</Radio>
                        <Radio value="Plants">Plants</Radio>
                        <Radio value="Trees">Trees</Radio>
                        <Radio value="Flowers">Flowers</Radio>
                        <Input variant="flushed" placeholder="others..." w="90%" />
                      </Flex>
                    </RadioGroup>
                  </Flex>
                  <Flex direction="column" w="100%" borderRight="1px solid">
                    <Text textAlign="center" fontSize="20px">
                      Weather
                    </Text>
                    <RadioGroup onChange={handleRadioClick}>
                      <Flex direction="column" justifyContent="center" pl="4">
                        <Radio value="Sunny">Sunny</Radio>
                        <Radio value="Rainy">Rainy</Radio>
                        <Radio value="Humid">Humid</Radio>
                        <Radio value="Frosty">Frosty</Radio>
                        <Input variant="flushed" placeholder="others..." w="90%" />
                      </Flex>
                    </RadioGroup>
                  </Flex>
                  
                  <Flex direction="column" w="100%">
                    <Text textAlign="center" fontSize="20px">
                      Soil
                    </Text>
                    <RadioGroup onChange={handleRadioClick}>
                      <Flex direction="column" justifyContent="center" pl="4">
                        <Radio value="Loamy soil">Loamy soil</Radio>
                        <Radio value="Clay Soil">Clay Soil</Radio>
                        <Radio value="Red Soil">Red Soil</Radio>
                        <Radio value="Laterite Soil">Laterite Soil</Radio>
                        <Input variant="flushed" placeholder="others..." w="90%" />
                      </Flex>
                    </RadioGroup>
                  </Flex>
                </Flex>
              </Flex>

             
            </Flex>
	
        <Flex h="12vh" alignItems="center" p="10px" gap={2} >
			<Input 
				type="text" 
				bg="#252529"
				color="white"
				border="2px solid #505055"
				height="40px"
				fontSize="18px"
			/>
          {/* <Textarea
            bg="white"
			resize={false}
			size
            onChange={handleInputChange}
            value={inputValue}
            color="black"
          /> */}
          <Button 
			type="submit" 
			h="40px"
			w="40px"
			bg="#252529"
			color="white"
			border="2px solid #505055"
		  	padding="10px"
			onClick={handleClick}

		  >
            <FiSend size="40px" color="#adadb7"/>

          </Button>
            </Flex>
			</> :            
            <>
            
            </>}
      </Flex>
    </Flex>
    </>
  );
}
