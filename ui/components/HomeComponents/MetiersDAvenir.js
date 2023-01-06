import React, { useQuery } from "react"
import { Image, Text, UnorderedList, ListItem, Divider, GridItem, Grid, Container, Box, SimpleGrid, Link, Flex } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const jobCssProperties = {
  background: "beige",
  borderRadius: "8px",
  border: "1.2px solid",
  borderColor: "bluefrance.200",
  height: "70px",
  padding: 8,
  alignItems: "center",
  direction: "row",
  cursor: "pointer",
}

const buildJobBlock = () => {
  return (
    <Flex {...jobCssProperties}>
      <Text fontSize="20px" fontWeight={700} color="info">
        Tralala
      </Text>
      <ArrowForwardIcon color="info" fontSize="20px" marginLeft="auto" />
    </Flex>
  )
}

const MetiersDAvenir = () => {
  return (
    <Container variant="responsiveContainer">
      <Text as="h2">
        <Text as="span" display="block" mb={1} variant="editorialContentH1" color="#2a2a2a">
          Les métiers
        </Text>
        <Text as="span" display="block" mb={1} variant="editorialContentH1">
          d'avenir
        </Text>
      </Text>
      <Divider variant="pageTitleDivider" my={[4, 4, 8]} />

      <Grid templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}>
        <GridItem colSpan="4" mr={[0, 0, 8, 8]} mb={[4, 4, 0, 0]}>
          <Box textAlign="center" height="100%" border="1px solid #E7E7E7" borderRadius="8px" py={12} px={8}>
            <Text as="p" lineHeight="32px" fontWeight={700} fontSize="24px" mb="5">
              Votre futur métier est peut-être parmi cette sélection !
            </Text>
            <Text textAlign="center" mb="5">
              Ces suggestions sont issues du service Diagoriente, qui oeuvre à l'orientation et l'insertion professionnelle.
            </Text>
            <Link variant="editorialContentLink" isExternal href="https://diagoriente.gitbook.io/base-unifiee-competences-formations-metiers/presentation-generale/genese">
              En savoir plus
            </Link>
          </Box>
        </GridItem>
        <GridItem colSpan="8" height="100%">
          <SimpleGrid columns={[1, 1, 1, 2]} spacingX={8} spacingY={4}>
            {buildJobBlock()}
            {buildJobBlock()}
            {buildJobBlock()}
            {buildJobBlock()}
            {buildJobBlock()}
            {buildJobBlock()}
            {buildJobBlock()}
            {buildJobBlock()}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default MetiersDAvenir
