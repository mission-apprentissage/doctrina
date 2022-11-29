import React from "react"
import { Box, Image, Text, Grid, GridItem } from "@chakra-ui/react"

const GerezEntreprise = () => {
  return (
    <Box as="section">
      <Grid>
        <GridItem className="col-12 col-md-6">
          <Image src="/images/home_pics/illu-listeoffres.svg" alt=""></Image>
        </GridItem>
        <GridItem className="col-12 col-md-6 pt-md-5 mb-2 mb-md-5">
          <Text as="h2">Gérez vos entreprises partenaires et leurs offres grâce à un tableau de bord</Text>
          <Text>Modifiez les offres, recevez les candidatures et préqualifiez les candidats pour vos entreprises et vos formations.</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default GerezEntreprise
