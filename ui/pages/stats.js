import React from "react"
import Breadcrumb from "../components/breadcrumb"
import Navigation from "../components/navigation"
import ScrollToTop from "../components/ScrollToTop"

import Footer from "../components/footer"
import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { Container } from "reactstrap"

const stats = () => (
  <Box>
    <ScrollToTop />
    <Navigation />
    <Breadcrumb forPage="stats" label="Statistiques" />

    <Container>
      <Grid>
        <GridItem>
          <Text as="h1">
            <Text as="span" display="block">
              Statistiques
            </Text>
          </Text>
          <hr className="c-page-title-separator" align="left" />
        </GridItem>
        <GridItem>
          <h3>Statistiques</h3>
          <p>
            La bonne alternance est une startup d’Etat incubée par beta.gouv. Nous développons un service à destination des publics selon les principes du{" "}
            <a href="https://beta.gouv.fr/approche/manifeste" aira-label="Accès au site de Beta gouv">
              Manifeste de beta.gouv
            </a>
          </p>
          <p>
            Nous mesurons l’impact de nos actions et publions en toute transparence nos statistiques que vous pouvez{" "}
            <a href="https://datastudio.google.com/reporting/1v-Sim2qMlFSMn4n9JJWaMk8PIONvM757" aria-label="Accès aux statistiques du service">
              consulter ici
            </a>
          </p>
        </GridItem>
      </Grid>
    </Container>
    <Footer />
  </Box>
)

export default stats
