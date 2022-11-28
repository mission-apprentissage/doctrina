import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import ExternalLink from "./externalLink"
import { Box, Image, GridItem, Grid, Container, Link } from "@chakra-ui/react"

const Footer = (props) => {
  const router = useRouter()

  return (
    <>
      <Box as="nav">
        <Grid>
          <Grid>
            <GridItem className="col-12 col-lg-3">
              <Image src="/images/marianne.svg#svgView(viewBox(0 0 162 78))" alt="" width="290" height="130" />
            </GridItem>
            <GridItem className="col-12 col-lg-3">
              <Box>
                <Image src="/images/france_relance.svg" alt="" width="81" height="81" />
              </Box>
            </GridItem>
            <GridItem className="col-12 col-lg-6 c-footer-text">
              <Box>La bonne alternance. Trouvez votre alternance.</Box>
              <Box>La bonne alternance est proposée par les services suivants :</Box>
              <Box>
                <Link href="https://pole-emploi.fr" aria-label="Accès au site de Pôle emploi">
                  pole-emploi.fr
                </Link>
                <Link href="https://gouvernement.fr" aria-label="Accès au site gouvernement.fr">
                  gouvernement.fr
                </Link>
                <Link href="https://service-public.fr" aria-label="Accès au site service-public.fr">
                  service-public.fr
                </Link>
                <Link href="https://data.gouv.fr" aria-label="Accès au site data.gouv">
                  data.gouv.fr
                </Link>
              </Box>
            </GridItem>
          </Grid>
        </Grid>
      </Box>
      <nav className="c-footer pt-2 pb-5">
        <Container>
          <Row>
            <Col className="col-12">
              <ul className="c-footer-links">
                <li className="c-footer-links__line">
                  <Link href="/mentions-legales">
                    <a className="c-footer-links__link c-footer-smallword pr-3" aria-label="Accès aux mentions légales">
                      Mentions légales
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/cgu">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès aux conditions générales d'utilisation">
                      CGU
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/cookies">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès à la page Cookies">
                      Cookies
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/stats">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès aux statistiques du service">
                      Statistiques
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/faq">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès à la foire aux questions">
                      FAQ
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/contact">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès à la page Contact">
                      Contact
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/metiers">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès à la page Métiers">
                      Métiers
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/a-propos">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès à la page A propos">
                      A propos
                    </a>
                  </Link>
                </li>

                <li className="c-footer-links__line">
                  <Link href="/developpeurs">
                    <a className="c-footer-links__link c-footer-smallword" aria-label="Accès à la page Développeurs">
                      Développeurs
                    </a>
                  </Link>
                </li>
                <li className="c-footer-links__line">
                  <a className="c-footer-links__link c-footer-smallword">Accessibilité : non conforme</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12">
              <div className="c-footer-smallword c-footer-lastword">
                Sauf mention contraire, tous les contenus de ce site sont sous licence{" "}
                <ExternalLink
                  url="https://www.etalab.gouv.fr/licence-version-2-0-de-la-licence-ouverte-suite-a-la-consultation-et-presentation-du-decret"
                  aria-label="Accès au site Etalab"
                  title="etalab-2.0"
                  withPic={<img className="ml-1" src="/images/square_link.svg" alt="Ouverture dans un nouvel onglet" />}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
    </>
  )
}

export default Footer
