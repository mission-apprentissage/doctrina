import { useRouter } from "next/router"
import { Box, Flex, Image, Link, useDisclosure, Stack, Show, Container } from "@chakra-ui/react"

import { HamburgerIcon } from "@chakra-ui/icons"

const Navigation = ({ currentPage, bgcolor, ...props }) => {
  const router = useRouter()

  let main_class_name = "c-navigation "
  main_class_name += bgcolor ?? "is-filled"

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
        <Flex py={2} px={4} direction={["column", "column", "row"]} justify="space-between">
          <Flex alignItems="center" wrap="wrap">
            <Flex flexGrow={1}>
              <Box ml={[4, 4, 0]} display="flex" alignItems="center">
                <Image src="/images/marianne.svg#svgView(viewBox(12 0 162 78))" alt="" width="162" height="78" />
                <Show above="lg">
                  <Image src={`/images/${getLogo()}`} alt="Redirection vers la page d'accueil" width="150" height="57" ml={4} />
                </Show>
              </Box>
            </Flex>
            <HamburgerIcon onClick={isOpen ? onClose : onOpen} display={["inline", "inline", "none"]} cursor="pointer" />
          </Flex>
          <Flex display={[isOpen ? "flex" : "none", isOpen ? "flex" : "none", "flex"]} alignItems="center">
            <Stack align="left" direction={["column", "column", "row"]}>
              <Link href="/" aria-label="Accès espace candidat" display="inline-grid">
                <Box as="span" mx="1" color="bluefrance.500" fontSize={14} px={3} py={2} bg={!currentPage ? "#00000014" : "none"}>
                  Candidat
                </Box>
              </Link>
              <Show above="md">
                <Box borderRight="1px solid" borderColor="grey.300" marginTop="10px !important;" marginBottom="10px !important;"></Box>
              </Show>
              <Link href="/acces-recruteur" aria-label="Accès espace recruteur" display="inline-grid">
                <Box as="span" mx="1" color="bluefrance.500" fontSize={14} px={3} py={2} bg={currentPage === "acces-recruteur" ? "#00000014" : "none"}>
                  Recruteur
                </Box>
              </Link>
              <Show above="md">
                <Box borderRight="1px solid" borderColor="grey.300" my="6" marginTop="10px !important;" marginBottom="10px !important;"></Box>
              </Show>
              <Link href="/organisme-de-formation" aria-label="Accès espace organisme de formation" display="inline-grid">
                <Box as="span" mx="1" color="bluefrance.500" fontSize={14} px={3} py={2} bg={currentPage === "organisme-de-formation" ? "#00000014" : "none"}>
                  Organisme de formation
                </Box>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navigation
