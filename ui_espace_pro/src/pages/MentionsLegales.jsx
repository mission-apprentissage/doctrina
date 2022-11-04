import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Breadcrumb } from "../common/components/Breadcrumb";
import Layout from "../common/components/Layout";
import { setTitle } from "../common/utils/pageUtils";

/**
 * @description Legal terms component.
 * @return {JSX.Element}
 */
export default () => {
  const title = "Mentions Légales";
  setTitle(title);

  return (
    <Layout>
      <Box w="100%" pt={[4, 8]} px={[1, 1, 12, 24]}>
        <Container maxW="xl">
          <Breadcrumb pages={[{ title: "Accueil", to: "/" }, { title: title }]} />
          <Heading textStyle="h2" color="grey.800" mt={5}>
            {title}
          </Heading>
          <Box pt={1} pb={16}>
            <Box>
              <Text>Mentions légales « Plateforme de digitalisation »</Text>
              <Box mt={4}>
                <Heading as={"h3"} textStyle="h6" mb={2}>
                  Éditeur du site
                </Heading>
                <Text>
                  Le présent Site internet, accessible à l'adresse «contrat.apprentissage.beta.gouv.fr », est édité par
                  le ministère du Travail (Délégation générale à l'emploi et à la formation professionnelle) (ci-après
                  le « Ministère ») dont le siège est situé au 10-18 place des Cinq Martyrs du Lycée Buffon, 75015 Paris
                  (tél. : 01 44 38 38 38) et dont le directeur de la publication est Bruno Lucas.
                </Text>
              </Box>
              <Box mt={4}>
                <Heading as={"h3"} textStyle="h6" mb={2}>
                  L'hébergement du Site internet est assuré par
                </Heading>
                <Text>
                  OVH :
                  <br />
                  2 rue Kellermann
                  <br />
                  59100 Roubaix
                  <br />
                  Tél. : 09 72 10 10 07
                </Text>
              </Box>
              <Box mt={4}>
                La conception et la réalisation du site sont effectuées par La Mission interministérielle pour
                l&#39;apprentissage, située à l&#39;adresse::
                <br />
                Beta.gouv
                <br />
                20 avenue de Ségur
                <br />
                75007 PARIS
              </Box>
              <Box mt={4}>
                <Heading as={"h3"} textStyle="h6" mb={2}>
                  Sécurité
                </Heading>
                <Text>
                  Le site est protégé par un certificat électronique, matérialisé pour la grande majorité des
                  navigateurs par un cadenas. Cette protection participe à la confidentialité des échanges.
                  <br />
                  En aucun cas les services associés au site ne seront à l'origine d'envoi de courriels pour demander la
                  saisie d'informations personnelles.
                </Text>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};
