import { useRouter } from "next/router"
import React from "react"
import { Box, Image, GridItem, Grid, Container, Link, UnorderedList, ListItem } from "@chakra-ui/react"

const Footer = (props) => {
  const router = useRouter()

  return (
    <>
      <Box as="nav">
        <Container>
          <Grid>
            <GridItem>
              <Image src="/images/marianne.svg#svgView(viewBox(0 0 162 78))" alt="" width="290" height="130" />
            </GridItem>
            <GridItem>
              <Box>
                <Image src="/images/france_relance.svg" alt="" width="81" height="81" />
              </Box>
            </GridItem>
            <GridItem>
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
      <nav>
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
                  <Link href="/cgu">
                    <a aria-label="Accès aux conditions générales d'utilisation">CGU</a>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="/cookies">
                    <a aria-label="Accès à la page Cookies">Cookies</a>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="/stats">
                    <a aria-label="Accès aux statistiques du service">Statistiques</a>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="/faq">
                    <a aria-label="Accès à la foire aux questions">FAQ</a>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="/contact">
                    <a aria-label="Accès à la page Contact">Contact</a>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="/metiers">
                    <a aria-label="Accès à la page Métiers">Métiers</a>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="/a-propos">
                    <a aria-label="Accès à la page A propos">A propos</a>
                  </Link>
                </ListItem>

                <ListItem>
                  <Link href="/developpeurs">
                    <a aria-label="Accès à la page Développeurs">Développeurs</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <a>Accessibilité : non conforme</a>
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
      </nav>
    </>
  )
}

export default Footer
