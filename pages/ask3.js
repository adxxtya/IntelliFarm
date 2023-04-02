

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {

  return (
    <Flex
          h="100vh"
          w="100%"
          bg="teal.200"
          justifyContent="center"
          alignItems="center"
    >
          <Flex
              h="100vh"
              w="60%"
              bg="orange.200"
          >
              Hi
        </Flex>
    </Flex>
  );
}
