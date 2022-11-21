import React from "react"
import { Box, Image, SimpleGrid, Text, Show } from "@chakra-ui/react"

const GerezOffres = () => {
  return (
    <Box as="section" p={3} mb={5}>
      <Box>
        <Text className="c-homecomponent-bientot mb-4 d-block d-md-none">Bientôt</Text>
        <Image src="/images/home_pics/illu-candidatures.svg" alt="" />
      </Box>
      <Box className="col-12 col-md-6 mb-5">
        <Text>Bientôt</Text>
        <Text as="h2">Gérez vos offres de manière collaborative</Text>
        <Text>Un accès multi-comptes permettra à plusieurs personnes de votre entreprise d’accéder et de gérer vos offres d&apos;emploi.</Text>
        <Text as="h2">Consultez et gérez vos candidatures</Text>
        <Text>Vérifiez d&apos;un coup d&apos;œil la progression des candidatures pour définir les prochaines étapes.</Text>
      </Box>
    </Box >
  )
}

export default GerezOffres
