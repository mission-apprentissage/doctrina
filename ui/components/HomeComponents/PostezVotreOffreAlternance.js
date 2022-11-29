import React from "react"
import { Box, Image, Text, Grid, GridItem } from "@chakra-ui/react"

const PostezVotreOffreAlternance = () => {
  return (
    <Box as="section">
      <Grid>
        <GridItem>
          <Image src="/images/home_pics/illu-offreemploi.svg" alt=""></Image>
        </GridItem>
        <GridItem>
          <Text as="h2">Déposez des offres d’alternance pour vos entreprises partenaires</Text>
          <Box>
            <Text>3 étapes seulement pour mettre en ligne les besoins de vos entreprises partenaires.</Text>
            <Text>Vos offres regroupant formation et emploi seront mises en avant sur les différents sites.</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default PostezVotreOffreAlternance
