import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex } from '@chakra-ui/react'
import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {

  const [inputValue, setInputValue] = useState("");

   const handleClick = () => {
    console.log(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Flex
      h="100vh"
      w="100%"
      bg="teal"
      justifyContent="center"
      alignItems="center"
    >
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleClick}>Hi</Button>
    </Flex>
  )
}
