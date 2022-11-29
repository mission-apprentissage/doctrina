import React from "react"

import { Box, Image, Link, Grid, GridItem, Text } from "@chakra-ui/react"

const BientotCFA = () => {
  return (
    <Box>
      <Grid>
        <GridItem>
          <Box>Bientôt</Box>
        </GridItem>
        <GridItem>
          <Image src="/images/home_pics/illu-offrecouplee.svg" alt="" />
        </GridItem>
        <GridItem>
          <Image src="/images/home_pics/illu-candidatures.svg" alt="" />
        </GridItem>
        <GridItem>
          <Text as="h2" variant="homeEditorialH2">
            Gérez vos offres de manière collaborative
          </Text>
          <Text>Un accès multi-comptes permettra à plusieurs personnes d’accéder et de gérer vos offres d’emploi.</Text>
        </GridItem>
        <GridItem>
          <Text as="h2" variant="homeEditorialH2">
            Rattachez vos formations aux offres que vous gérez, pour les rendre plus visibles
          </Text>
          <Text>En associant une formation à une offre, attirez plus de jeunes avec des offres complètes regroupant formation et emploi.</Text>
        </GridItem>
        <GridItem>
          <Text as="h2" variant="homeEditorialH2">
            Identifiez de nouvelles entreprises partenaires
          </Text>
          <Text>Découvrez le marché du travail pour chacune de vos offres de formation.</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default BientotCFA
