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
          <Box as="span" background="linear-gradient(90deg,#6a11cb,#2575fc)" color="#fff" borderRadius="80" lineHeight="32px" px={9} py={2} fontSize="20px" fontWeight="700">Bientôt</Box>
        </Box>
      </SimpleGrid>
      <Box>&nbsp;</Box>
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
