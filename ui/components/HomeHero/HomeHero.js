import React from "react"
import StartForm from "../StartForm"
import { Container, Box } from "@chakra-ui/react"

const HomeHero = () => {
  return (
    <Box>
      <Container variant="responsiveContainer">
        <Box>
          <StartForm />
        </Box>
      </Container>
    </Box>
  )
}

export default HomeHero
