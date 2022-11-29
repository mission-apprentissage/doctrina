import React from "react"
import { Box, Image, Text, Grid, GridItem } from "@chakra-ui/react"

const ReseauEntreprise = () => {
  return (
    <Box as="section">
      <Grid>
        <GridItem className="col-12 col-md-6">
          <Image src="/images/home_pics/illu-miseenrelation.svg" alt=""></Image>
        </GridItem>
        <GridItem className="col-12 col-md-6 pt-md-5">
          <Text as="h2">Développez votre réseau d’entreprises partenaires pour accompagner au mieux vos candidats en recherche de contrat</Text>
          <Text>Recevez des demandes de contact d’entreprises en recherche d’alternants.</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default ReseauEntreprise
