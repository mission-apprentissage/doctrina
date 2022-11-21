import React from "react"
import { Box, Image, SimpleGrid, Text, Show, Button } from "@chakra-ui/react"

const GerezOffres = () => {
  return (
    <Box as="section" p={3} mb={5}>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px">
        <Show above="md">
          <Box>&nbsp;</Box>
        </Show>
        <Box>
          <Button>Bientôt</Button>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px">
        <Box>
          <Image src="/images/home_pics/illu-candidatures.svg" alt="" />
        </Box>
        <Box>
          <Box>
            <Text as="h2">Gérez vos offres de manière collaborative</Text>
            <Text>Un accès multi-comptes permettra à plusieurs personnes de votre entreprise d’accéder et de gérer vos offres d&apos;emploi.</Text>
          </Box>
          <Box>
            <Text as="h2">Consultez et gérez vos candidatures</Text>
            <Text>Vérifiez d&apos;un coup d&apos;œil la progression des candidatures pour définir les prochaines étapes.</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box >
  )
}

export default GerezOffres
