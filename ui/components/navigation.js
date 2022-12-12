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
        <Flex py={2} px={4} direction={["column", "column", "row"]} justify="space-between" bg="orange.400">
          <Flex alignItems="center" wrap="wrap">
            <Flex flexGrow={1}>
              <Box ml={[4, 4, 0]} display="flex">
                <Image src="/images/marianne.svg#svgView(viewBox(12 0 162 78))" alt="" width="162" height="78" />
                <Show above="lg">
                  <Image src={`/images/${getLogo()}`} alt="Redirection vers la page d'accueil" width="110" height="76" />
                </Show>
              </Box>
            </Flex>
            <HamburgerIcon onClick={isOpen ? onClose : onOpen} display={["inline", "inline", "none"]} cursor="pointer" />
          </Flex>
          <Flex display={[isOpen ? "flex" : "none", isOpen ? "flex" : "none", "flex"]}>
            <Stack align="left" direction={["column", "column", "row"]}>
              <Link href="/" aria-label="Accès espace candidat">
                <Box as="span" mx="1">
                  Candidat
                </Box>
              </Link>
              <Link href="/acces-recruteur" aria-label="Accès espace recruteur">
                <Box as="span" mx="1">
                  Recruteur
                </Box>
              </Link>
              <Link href="/organisme-de-formation" aria-label="Accès espace organisme de formation">
                <Box as="span" mx="1">
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
