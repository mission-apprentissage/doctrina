import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap"
import { Box, Image, Link } from "@chakra-ui/react"

const Navigation = ({ currentPage, bgcolor }) => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

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

  return (
    <Box className={main_class_name}>
      <Navbar expand="lg" className="navbar-light">
        <Box>
          <NavbarBrand
            href={getLogoTargetUrl()}
            onClick={(e) => {
              e.preventDefault()
              router.push(getLogoTargetUrl())
            }}
          >
            <Image src="/images/marianne.svg#svgView(viewBox(12 0 162 78))" alt="" width="162" height="78" />
            <Image src={`/images/${getLogo()}`} alt="Redirection vers la page d'accueil" width="110" height="76" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="c-navbar-links ml-auto" navbar>
              <NavItem className={`ml-lg-5 mr-2 ${!currentPage ? "selected" : ""}`}>
                <Link href="/" aria-label="Accès espace candidat">
                  <Box as="span" mx="1">
                    Candidat
                  </Box>
                </Link>
              </NavItem>

              <Box></Box>

              <NavItem className={`mr-2 ml-lg-2 ${currentPage === "acces-recruteur" ? "selected" : ""}`}>
                <Link href="/acces-recruteur" aria-label="Accès espace recruteur">
                  <Box as="span" mx="1">
                    Recruteur
                  </Box>
                </Link>
              </NavItem>

              <Box></Box>

              <NavItem className={`ml-lg-2 ${currentPage === "organisme-de-formation" ? "selected" : ""}`}>
                <Link href="/organisme-de-formation">
                  <a className="nav-link" aria-label="Accès espace organisme de formation">
                    <span className="mx-1">Organisme de formation</span>
                  </a>
                </Link>
              </NavItem>

              {currentPage === "acces-recruteur" || currentPage === "organisme-de-formation" ? (
                <>
                  <Box className="ml-2 c-navigation__separator"></Box>
                  <NavItem className="ml-lg-2">
                    <Link href="/espace-pro/authentification">
                      <a className="nav-link" aria-label="Connexion">
                        <img src="/images/icons/blue_lock.svg" alt="" />
                        <span className="mx-2">Connexion</span>
                      </a>
                    </Link>
                  </NavItem>
                </>
              ) : (
                ""
              )}
            </Nav>
          </Collapse>
        </Box>
      </Navbar>
    </Box>
  )
}

export default Navigation
