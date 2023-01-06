import React, { useQuery } from "react"
import NextLink from "next/link"
import { Text, Divider, GridItem, Grid, Container, Box, SimpleGrid, Link, Flex } from "@chakra-ui/react"
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

const buildJobBlock = ({ title = "Boulanger pâtissier", romes = ["D1102", "D1104"] }) => {
  return (
    <NextLink passHref href={`/recherche-apprentissage?&display=list&job_name=${title}&romes=${romes}&radius=60`}>
      <Link
        _focus={{ borderRadius: "8px", boxShadow: "0 4px 12px 2px rgb(0 0 0 / 21%)" }}
        _hover={{ textDecoration: "none" }}
        title={`Voir la liste des formations et opportunités d'emploi en alternance pour le métier d'avenir ${title}`}
      >
        <Flex {...jobCssProperties}>
          <Text fontSize="20px" fontWeight={700} color="info">
            {title}
          </Text>
          <ArrowForwardIcon color="info" fontSize="20px" marginLeft="auto" />
        </Flex>
      </Link>
    </NextLink>
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
            {buildJobBlock({})}
            {buildJobBlock({})}
            {buildJobBlock({})}
            {buildJobBlock({})}
            {buildJobBlock({})}
            {buildJobBlock({})}
            {buildJobBlock({})}
            {buildJobBlock({})}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default MetiersDAvenir
