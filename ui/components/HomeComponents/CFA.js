import React from "react"
import ConnectionActions from "./ConnectionActions"
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react"

const CFA = () => {
  return (
    <Box>
      <Grid>
        <GridItem>
          <Image src="/images/home_pics/illu-entreprisesmandatees.svg" alt=""></Image>
        </GridItem>
        <GridItem>
          <Text as="h1">Vous êtes un organisme de formation</Text>
          <Text as="h2">Diffusez et gérez simplement les offres d’emploi de vos entreprises partenaires.</Text>
          <Box>Créez le compte de votre CFA pour administrer vos offres et être contacté par des entreprises à la recherche d’alternants.</Box>
          <ConnectionActions service="cfa" />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default CFA
