import React from "react"
import TagCandidatureSpontanee from "../../components/ItemDetail/TagCandidatureSpontanee.js"
import TagOffreEmploi from "../../components/ItemDetail/TagOffreEmploi.js"
import { Box, Image, Text, UnorderedList, ListItem, Divider } from "@chakra-ui/react"

const AlgoHome = () => {
  return (
    <Box>
      <Box className="">
        <Text as="h2">
          <Text as="span">Vous révéler</Text>
          <Text as="span">le marché caché de l&apos;emploi</Text>
        </Text>
        <Divider variant="pageTitleDivider" my={12} />
        <Text as="p" className="c-algo-text">La bonne alternance expose différents types d&apos;opportunités d&apos;emplois :</Text>
        <UnorderedList>
          <ListItem>
            <strong>Les offres d&apos;emploi</strong> : publiées sur notre plateforme ainsi que celles issues de Pôle emploi et ses partenaires. Elles sont identifiées grâce au tag{" "}
            <TagOffreEmploi />
          </ListItem>
          <ListItem>
            <strong>Les candidatures spontanées</strong> : correspondant au marché caché de l&apos;emploi. Chaque mois, un algorithme prédictif de Pôle emploi analyse les
            recrutements des 6 années passées pour prédire ceux des 6 mois à venir. Grâce à ces données, il identifie une liste restreinte d&apos;entreprises &quot;à fort potentiel
            d&apos;embauche en alternance&quot; pour faciliter vos démarches de candidatures spontanées. Elles sont identifiées grâce au tag <TagCandidatureSpontanee />
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Image src="/images/icons/algo_home.svg" alt="" />
      </Box>
    </Box>
  )
}

export default AlgoHome
