import React from "react"
import { Box, Grid, GridItem, Link } from "@chakra-ui/react"

const AmeliorerLBA = () => {
  return (
    <Box as="section" p="3" mb="5">
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem>
          <Image src="/images/home_pics/illu-support.svg" alt="" />
        </GridItem>
        <GridItem>
          <Text>Donnez votre avis</Text>
          <Text as="h2">Aidez-nous à améliorer La bonne alternance</Text>
          <Text>
            La bonne alternance est un service en construction. Pour le faire évoluer, nous interrogeons régulièrement les utilisateurs du service.
          </Text>
          <Text>
            <strong>Nous vous invitions à participer à un échange en visio d’une trentaine de minutes avec un membre de notre équipe pour répondre à quelques questions et nous partager
              votre avis.</strong>
          </Text>
          <Box mt="3">
            <Link
              href="https://calendly.com/rdv-labonnealternance/discussion-labonnealternance"
              aria-label="Planifier un échange avec l'équipe"
              title="Je participe à l'étude"
              isExternal
            >Je participe à l'étude</Link>
          </Box>
          <Box mt="3">
            &nbsp;
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
export default AmeliorerLBA
