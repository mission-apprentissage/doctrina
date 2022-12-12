import { useRouter } from "next/router"
import { useState } from "react"
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

  return <Box></Box>
}

export default Navigation
