import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {

  return (
    <Flex h="100vh" position="relative">
      <Flex
        position="absolute"
        bottom="3"
        bg="red.100"
        w="100%"
        justifyContent="flex-end"
      >
        <Image
          src="/assets/farmer-webp.webp"
          width={1000}
          height={600}
          alt="farmer"
        />
      </Flex>
      <Flex position="absolute" w="100%" justifyContent="center" bottom={4}>
        <Flex border="2px solid" w="80%" borderRadius={100} p={4} fontWeight="600">
          <Input h="46px" bg="white" fontSize="24px" />
        </Flex>
      </Flex>
    </Flex>
  );
  // return (
  //   <Flex
  //     h="100vh"
  //     w="100%"
  //     bg="teal"
  //     justifyContent="center"
  //     alignItems="center"
  //   >
  //     <Input value={inputValue} onChange={handleInputChange} />
  //     <Button onClick={handleClick}>Hi</Button>
  //   </Flex>
  // )
}
