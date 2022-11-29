import React from "react"

import { Box, Image, Grid, GridItem, Text } from "@chakra-ui/react"

const BientotCFA = () => {
  return (
    <Box>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} templateRows={{ base: "auto", lg: "repeat(6, 1fr)" }}>
        <GridItem gridColumn={{ base: "1fr", lg: "1 / 3" }} gridRow={{ base: "auto", lg: "1 / 3" }}>
          <Image src="/images/home_pics/illu-candidatures.svg" alt="" width={{ base: "120px", lg: "511px" }} />
        </GridItem>
        <GridItem gridColumn={{ base: "1fr", lg: "1 / 3" }} gridRow={{ base: "auto", lg: "3 / 5" }}>
          <Image src="/images/home_pics/illu-offrecouplee.svg" alt="" width={{ base: "120px", lg: "511px" }} />
        </GridItem>
        <GridItem gridColumn={{ base: "1fr", lg: "3 / 5" }} gridRow={{ base: "auto", lg: "1 / 1" }}>
          <Box display="flex" alignItems="flex-end" justifyContent="flex-start" height="100%">
            <Text bg="linear-gradient(90deg, #6A11CB 0%, #2575FC 100%);" color="white" borderRadius={40} fontSize={20} px={4} fontWeight={700}>
              Bientôt
            </Text>
          </Box>
        </GridItem>
        <GridItem gridColumn={{ base: "1fr", lg: "3 / 5" }} gridRow={{ base: "auto", lg: "2 / 2" }}>
          <Text as="h2" variant="homeEditorialH2">
            Gérez vos offres de manière collaborative
          </Text>
          <Text>Un accès multi-comptes permettra à plusieurs personnes d’accéder et de gérer vos offres d’emploi.</Text>
        </GridItem>
        <GridItem gridColumn={{ base: "1fr", lg: "3 / 5" }} gridRow={{ base: "auto", lg: "3 / 3" }}>
          <Text as="h2" variant="homeEditorialH2">
            Rattachez vos formations aux offres que vous gérez, pour les rendre plus visibles
          </Text>
          <Text>En associant une formation à une offre, attirez plus de jeunes avec des offres complètes regroupant formation et emploi.</Text>
        </GridItem>
        <GridItem gridColumn={{ base: "1fr", lg: "3 / 5" }} gridRow={{ base: "auto", lg: "4 / 4" }}>
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
