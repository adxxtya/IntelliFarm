import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function farm () {
  return (
       <div id="app">
      <div id="chat_container"></div>

      <form>
        <textarea name="prompt" rows="1" cols="1" placeholder="Ask codex..."></textarea>
        <button type="submit" /><img src="assets/send.svg" alt="send" />        
      </form>
    </div>
  )
}
