import React from "react"
import howto1 from "../../public/images/howto1.svg"
import howto2 from "../../public/images/howto2.svg"
import howto3 from "../../public/images/howto3.svg"
import howtoline1 from "../../public/images/howtoline1.svg"
import howtoline2a from "../../public/images/howtoline2a.svg"
import howtoline3a from "../../public/images/howtoline3a.svg"
import howtoline3b from "../../public/images/howtoline3b.svg"
import { Image, Text, UnorderedList, ListItem, Divider, GridItem, Grid, Container, Box, Show, Hide } from "@chakra-ui/react"

const HowTo = () => {
  return (
    <>
      <Container variant="responsiveContainer">
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="24">
          <GridItem position="relative" width={{ base: "200px", md: "auto" }} mx="auto" mt={{base: "12", md: "0" }}>
            <Image src={howto1} alt=""  />
            <Show above="md">
              <Image src={howtoline1} alt="" position="absolute" top="85px" left="-162px" />
            </Show>
            <Box>
              <Text as="h3">Le job de vos rêves</Text>
              <Text as="p">Renseignez le métier que vous souhaitez faire et la localisation (Ville ou Code postal)</Text>
            </Box>
          </GridItem>
          <GridItem position="relative" width={{ base: "200px", md: "auto" }} mx="auto" mt={{base: "12", md: "0" }}>
            <Image src={howto2} alt=""  />
            <Show above="md">
              <Image src={howtoline2a} alt="" position="absolute" top="47px" left="-208px" />
            </Show>
            <Box>
              <Text as="h3">En un clin d’&oelig;il</Text>
              <Text as="p">Obtenez la liste des formations et entreprises proches de chez vous dans le domaine recherché.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <img src={howto3} className="card-img-top" alt="" />
            <img src={howtoline3a} className="position-absolute c-homebg-img c-homebg-img--line c-homebg-img--line3a" alt="" />
            <img src={howtoline3b} className="position-absolute c-homebg-img c-homebg-img--line c-homebg-img--line3b" alt="" />
            <div className="card-body">
              <h5 className="card-title">Un contact facile</h5>
              <p className="card-text">Contactez facilement les centres de formation ou les entreprises pour postuler </p>
            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default HowTo
