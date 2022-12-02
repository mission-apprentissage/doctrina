import { Box, Flex, Image, ModalBody, Text } from "@chakra-ui/react"
import React from "react"
import error2 from "../../../public/images/icons/input_value_error.svg"

const CandidatureSpontaneeFailed = ({ sendingState }) => {
  const errorReasonText = () => {
    let res = (
      <>
        <Flex direction="row" alignItems="center">
          <Image src={error2} mr={4} alt="" />
          <Text as="h2" fontWeight={700} fontSize="20px" data-testid="CandidatureSpontaneeFailedTitle">
            Une erreur est survenue.
          </Text>
        </Flex>
        <Box mt={10} mb={12} fontSize="18px">
          Vous pourrez essayer ultérieurement.
        </Box>
      </>
    )

    if (sendingState === "email temporaire non autorisé") {
      res = (
        <>
          <Flex direction="row" alignItems="center">
            <Image src={error2} mr={4} alt="" />
            <Text as="h2" fontWeight={700} fontSize="20px" data-testid="CandidatureSpontaneeFailedTempEmailTitle">
              Les adresses emails temporaires ne sont pas acceptées
            </Text>
          </Flex>
          <Box mt={10} mb={12} fontSize="18px">
            Les adresses emails temporaires ne sont pas acceptées pour envoyer des candidatures via La bonne alternance.
            <br />
            Merci d&apos;utiliser une adresse email permanente
          </Box>
        </>
      )
    }

    if (sendingState === "Too Many Requests") {
      res = (
        <>
          <Flex direction="row" alignItems="center">
            <Image src={error2} mr={4} alt="" />
            <Text as="h2" fontWeight={700} fontSize="20px" data-testid="CandidatureSpontaneeFailedTempEmailTitle">
              Trop de candidatures envoyées en peu de temps
            </Text>
          </Flex>
          <Box mt={10} mb={12} fontSize="18px">
            Veuillez patienter quelques instants et réessayer
          </Box>
        </>
      )
    }

    if (sendingState === "max candidatures atteint") {
      res = (
        <>
          <Flex direction="row" alignItems="center">
            <Image src={error2} mr={4} alt="" />
            <Text as="h2" fontWeight={700} fontSize="20px" data-testid="CandidatureSpontaneeFailedTempEmailTitle">
              Vous avez atteint le nombre maximum de candidature pour aujourd&apos;hui
            </Text>
          </Flex>
          <Box mt={10} mb={12} fontSize="18px">
            Vous pourrez en envoyer de nouveau demain
          </Box>
        </>
      )
    }

    return res
  }

  return (
    <Box data-testid="CandidatureSpontaneeFailed">
      <ModalBody>
        <Text as="h1" mb={10} fontSize="1.5rem" fontWeight={700}>
          Candidature spontanée
        </Text>
        {errorReasonText()}
      </ModalBody>
    </Box>
  )
}

export default CandidatureSpontaneeFailed
