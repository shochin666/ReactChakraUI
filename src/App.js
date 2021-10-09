import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Component } from './Component';

function App() {

  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default App;
