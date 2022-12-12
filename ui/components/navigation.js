import { Box, Flex, Image, Link, useDisclosure, Stack, Show, Container } from "@chakra-ui/react"

import { HamburgerIcon, LockIcon } from "@chakra-ui/icons"

const Navigation = ({ currentPage }) => {
  const getLogo = () => {
    let logo = "logo_LBA_candidat.svg"

    if (currentPage === "acces-recruteur") {
      logo = "logo_LBA_recruteur.svg"
    } else if (currentPage === "organisme-de-formation") {
      logo = "logo_LBA_cfa.svg"
    }

    return logo
  }

  const getLogoTargetUrl = () => {
    let url = "/"
    if (currentPage === "acces-recruteur" || currentPage === "organisme-de-formation") {
      url += currentPage
    }

    return url
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Container variant="responsiveContainer">
        <Flex py={2} direction={["column", "column", "column", "row"]} justify="space-between">
          <Flex alignItems="center" wrap="wrap">
            <Flex flexGrow={1}>
              <Box ml={[4, 4, 0]} display="flex" alignItems="center">
                <Link href="/" aria-label="Retour à l'accueil">
                  <Image src="/images/marianne.svg#svgView(viewBox(12 0 162 78))" alt="" width="162" height="78" />
                </Link>
                <Show above="md">
                  <Link href={getLogoTargetUrl()} aria-label="Retour">
                    <Image src={`/images/${getLogo()}`} alt="Redirection vers la page d'accueil" width="150" height="57" ml={4} />
                  </Link>
                </Show>
              </Box>
            </Flex>
            <HamburgerIcon boxSize={6} onClick={isOpen ? onClose : onOpen} display={["inline", "inline", "inline", "none"]} cursor="pointer" />
          </Flex>
          <Flex display={[isOpen ? "flex" : "none", isOpen ? "flex" : "none", isOpen ? "flex" : "none", "flex"]} alignItems="center">
            <Stack align="left" direction={["column", "column", "column", "row"]}>
              <Link href="/" aria-label="Accès espace candidat" display="inline-grid">
                <Box as="span" ml={[0, 0, 0, 2]} mr="1" color="bluefrance.500" fontSize={14} pl={[1, 1, 1, 3]} pr={3} py={2} bg={!currentPage ? "#00000014" : "none"}>
                  Candidat
                </Box>
              </Link>
              <Box display={["none", "none", "none", "block"]} borderRight="1px solid" borderColor="grey.300" marginTop="10px !important;" marginBottom="10px !important;"></Box>
              <Link href="/acces-recruteur" aria-label="Accès espace recruteur" display="inline-grid">
                <Box
                  as="span"
                  ml={[0, 0, 0, 2]}
                  mr="1"
                  color="bluefrance.500"
                  fontSize={14}
                  pl={[1, 1, 1, 3]}
                  pr={3}
                  py={2}
                  bg={currentPage === "acces-recruteur" ? "#00000014" : "none"}
                >
                  Recruteur
                </Box>
              </Link>
              <Box
                display={["none", "none", "none", "block"]}
                borderRight="1px solid"
                borderColor="grey.300"
                my="6"
                marginTop="10px !important;"
                marginBottom="10px !important;"
              ></Box>
              <Link href="/organisme-de-formation" aria-label="Accès espace organisme de formation" display="inline-grid">
                <Box
                  as="span"
                  ml={[0, 0, 0, 2]}
                  mr="1"
                  color="bluefrance.500"
                  fontSize={14}
                  pl={[1, 1, 1, 3]}
                  pr={3}
                  py={2}
                  bg={currentPage === "organisme-de-formation" ? "#00000014" : "none"}
                >
                  Organisme de formation
                </Box>
              </Link>
              {currentPage === "acces-recruteur" || currentPage === "organisme-de-formation" ? (
                <>
                  <Box
                    display={["none", "none", "none", "block"]}
                    borderRight="1px solid"
                    borderColor="grey.300"
                    my="6"
                    marginTop="10px !important;"
                    marginBottom="10px !important;"
                  ></Box>
                  <Link pl={[1, 1, 1, 3]} href="/espace-pro/authentification" cursor="pointer" display="flex" alignItems="center">
                    <LockIcon color="bluefrance.500" />
                    <Box as="span" color="bluefrance.500" fontSize={14} pl={[1, 1, 1, 2]} pr={2} py={2}>
                      Connexion
                    </Box>
                  </Link>
                </>
              ) : (
                ""
              )}
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navigation
