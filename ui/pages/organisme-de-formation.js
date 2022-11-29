import React from "react"
import Navigation from "../components/navigation"
import Breadcrumb from "../components/breadcrumb"
import { NextSeo } from "next-seo"

import Footer from "../components/footer"
import CFA from "../components/HomeComponents/CFA"
import ConnectionActions from "../components/HomeComponents/ConnectionActions"
import PostezVotreOffreAlternance from "../components/HomeComponents/PostezVotreOffreAlternance"
import FacilitezRDVA from "../components/HomeComponents/FacilitezRDVA"
import OffresGratuites from "../components/HomeComponents/OffresGratuites"
import ReseauEntreprise from "../components/HomeComponents/ReseauEntreprise"
import GerezEntreprise from "../components/HomeComponents/GerezEntreprise"
import BientotCFA from "../components/HomeComponents/BientotCFA"
import GerezOffresCFA from "../components/HomeComponents/GerezOffresCFA"
import FollowLinkedIn from "../components/HomeComponents/FollowLinkedIn"
import { Box, Container, Text } from "@chakra-ui/react"

const Organisme = () => {
  return (
    <Box>
      <NextSeo title="Organisme de formation | La bonne alternance | Trouvez votre alternance" description="Comment référencer ma formation ? Nous sommes là pour vous aider." />

      <Navigation bgcolor="is-white" currentPage="organisme-de-formation" />
      <Breadcrumb forPage="organisme-de-formation" label="Organisme de formation" />

      <Container maxW="container.lg" px={4} py={4}>
        <CFA />

        <Box as="section" mt="16">
          <FacilitezRDVA />
        </Box>

        <Box as="section" bg="beige" borderRadius={10} p={12} mt={16}>
          <PostezVotreOffreAlternance />
          <GerezEntreprise />
          <OffresGratuites />
          <ReseauEntreprise />
        </Box>

        <Box as="section">
          <BientotCFA />
        </Box>

        <Box>
          <Text as="h2">Vous souhaitez attirer de nouveaux candidats?</Text>
          <Box ml="4">
            <ConnectionActions service="cfa" />
          </Box>
        </Box>

        <FollowLinkedIn />
      </Container>

      <Footer />
    </Box>
  )
}
export default Organisme
