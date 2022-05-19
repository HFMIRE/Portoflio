import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import NavBar from "./component/NavBar"
import HeroBanner from "./component/HeroBanner"
import Project from "./component/Project"
import Grid from "./component/Grid"
export const App = () => (
  <ChakraProvider theme={theme}>
<Box>
  <NavBar/>
  <HeroBanner/>
  <Grid/>
  <Project/>
    </Box>
  </ChakraProvider>
)
