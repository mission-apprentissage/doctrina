import React from "react"
import { Box, Divider, Text, UnorderedList, ListItem } from "@chakra-ui/react"

const AlgoRecruiter = () => {
  return (
    <section className="c-algo container pl-5 py-4 mb-4">
      <Box>
        <Box as="h2">
          <Text as="span" display="block" mb={1} variant="editorialContentH1" color="#2a2a2a">
            La bonne alternance révèle
          </Text>
          <Text as="span" display="block" mb={1} variant="editorialContentH1">
            le marché caché de l&apos;emploi
          </Text>
        </Box>

        <Divider variant="pageTitleDivider" my={12} />
        <Box as="p">
          Le saviez-vous ? Afin d&apos;aider les candidats intéressés par l&apos;alternance à trouver un contrat, nous exposons différents types d&apos;entreprises sur notre
          service :
        </Box>
        <UnorderedList mb="2">
          <ListItem><strong>Celles ayant émis un besoin en recrutement </strong>sur notre plateforme ainsi que sur Pôle emploi et ses sites partenaires</ListItem>
          <ListItem>
            <strong>Celles n&apos;ayant pas diffusé d&apos;offres, mais ayant été identifiées comme &quot;à fort potentiel d&apos;embauche en alternance&quot;</strong> par un
            algorithme prédictif de Pôle emploi, qui analyse les recrutements des 6 années passées en CDI, CDD de plus de 30 jours et alternance. L’objectif de cet algorithme est
            de rendre accessible le marché caché de l’emploi, et ainsi faciliter les démarches de candidatures spontanées des usagers du service.
          </ListItem>
          <ListItem>Les présentes conditions d’utilisation peuvent être modifiées à tout moment et la date de mise à jour est mentionnée.</ListItem>
        </UnorderedList>
      </Box>
      <div className="c-algo-img d-flex-center">
        <img className="" src="/images/icons/algo_recruiter.svg" alt="" />
      </div>
    </section>
  )
}

export default AlgoRecruiter
