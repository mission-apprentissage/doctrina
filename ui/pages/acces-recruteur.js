import React from "react"
import Navigation from "../components/navigation"
import ScrollToTop from "../components/ScrollToTop"
import Breadcrumb from "../components/breadcrumb"
import Entreprise from "../components/HomeComponents/Entreprise"
import PostezVotreOffre from "../components/HomeComponents/PostezVotreOffre"
import OffresGratuites from "../components/HomeComponents/OffresGratuites"
import OrganismesMandataires from "../components/HomeComponents/OrganismesMandataires"
import GerezOffres from "../components/HomeComponents/GerezOffres"
import FollowLinkedIn from "../components/HomeComponents/FollowLinkedIn"
import AlgoRecruiter from "../components/HomeComponents/AlgoRecruiter"
import ConnectionActions from "../components/HomeComponents/ConnectionActions"
import { Box, Container, Divider, Grid, GridItem, Text, Spinner } from "@chakra-ui/react"

import { NextSeo } from "next-seo"

import Footer from "../components/footer"

const AccesRecruteur = () => (
  <Box>
    <NextSeo
      title="Acces recruteur | La bonne alternance | Trouvez votre alternance"
      description="Exprimez votre besoin en alternance. Aucune inscription ne vous sera demandée."
      />

    <ScrollToTop />
    <Navigation currentPage="acces-recruteur" />
    <Breadcrumb forPage="acces-recruteur" label="Accès recruteur" />

    <Container px={0} my={0} mb={[0, 12]} variant="pageContainer">
      <Entreprise />

      <Box as="section" mb={5}>
        <PostezVotreOffre />
        <OffresGratuites />
        <OrganismesMandataires />
      </Box>

      <GerezOffres />

      <Box>
        <AlgoRecruiter />
      </Box>

      <Box as="section">
        <Text as="h2" mb={5}>Vous souhaitez recruter un alternant pour votre entreprise ?</Text>
        <Box ml={4}>
          <ConnectionActions service="entreprise" />
        </Box>
      </Box>

      <FollowLinkedIn />
    </Container>
    <Box mb={3}>&nbsp;</Box>
    <Footer />
  </Box>
)

export default AccesRecruteur
