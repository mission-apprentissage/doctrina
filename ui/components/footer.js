import { useRouter } from "next/router"
import React from "react"
import { Box, Image, GridItem, Grid, Container, Link, UnorderedList, ListItem } from "@chakra-ui/react"

const Footer = (props) => {
  const router = useRouter()

  return (
    <Box as="footer">
      <Box as="nav">
        <Container>
          <Grid templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }}>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Image src="/images/marianne.svg#svgView(viewBox(0 0 162 78))" alt="" width="290" height="130" />
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Box>
                <Image src="/images/france_relance.svg" alt="" width="81" height="81" />
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 4 }}>
              <Box>La bonne alternance. Trouvez votre alternance.</Box>
              <Box>La bonne alternance est proposée par les services suivants :</Box>
              <Box>
                <Link href="https://pole-emploi.fr" aria-label="Accès au site de Pôle emploi" isExternal>
                  pole-emploi.fr
                </Link>
                <Link href="https://gouvernement.fr" aria-label="Accès au site gouvernement.fr" isExternal>
                  gouvernement.fr
                </Link>
                <Link href="https://service-public.fr" aria-label="Accès au site service-public.fr" isExternal>
                  service-public.fr
                </Link>
                <Link href="https://data.gouv.fr" aria-label="Accès au site data.gouv" isExternal>
                  data.gouv.fr
                </Link>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box as="nav">
        <Container>
          <Grid>
            <GridItem>
              <UnorderedList>
                <ListItem>
                  <Link href="/mentions-legales">
                    <a aria-label="Accès aux mentions légales">Mentions légales</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/cgu" aria-label="Accès aux conditions générales d'utilisation">
                    CGU
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/cookies" aria-label="Accès à la page Cookies">
                    Cookies
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/stats" aria-label="Accès aux statistiques du service">
                    Statistiques
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/faq" aria-label="Accès à la foire aux questions">
                    FAQ
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/contact" aria-label="Accès à la page Contact">
                    Contact
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/metiers" aria-label="Accès à la page Métiers">
                    Métiers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/a-propos" aria-label="Accès à la page A propos">
                    A propos
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/developpeurs" aria-label="Accès à la page Développeurs">
                    Développeurs
                  </Link>
                </ListItem>
                <ListItem>
                  <Link>Accessibilité : non conforme</Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem>
              <Box>
                Sauf mention contraire, tous les contenus de ce site sont sous licence{" "}
                <Link
                  url="https://www.etalab.gouv.fr/licence-version-2-0-de-la-licence-ouverte-suite-a-la-consultation-et-presentation-du-decret"
                  aria-label="Accès au site Etalab"
                  title="etalab-2.0"
                  withPic={<img src="/images/square_link.svg" alt="Ouverture dans un nouvel onglet" />}
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
