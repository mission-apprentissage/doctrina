import React from "react"
import ConnectionActions from "./ConnectionActions"
import { Box, Grid, GridItem, Image, Show, Text } from "@chakra-ui/react"

const CFA = () => {
  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}>
        <GridItem colSpan={{ base: 1, md: 6 }}>
          <Text as="h1" variant="homeEditorialH1" mb={3}>
            Vous êtes un organisme de formation
          </Text>
          <Text as="h2" variant="homeEditorialH2">
            Diffusez et gérez simplement les offres d’emploi de vos entreprises partenaires.
          </Text>
          <Box mt="12">Créez le compte de votre CFA pour administrer vos offres et être contacté par des entreprises à la recherche d’alternants.</Box>
          <ConnectionActions service="cfa" />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 6 }}>
          <Show above="md">
            <Image src="/images/home_pics/illu-entreprisesmandatees.svg" alt=""></Image>
          </Show>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default CFA
