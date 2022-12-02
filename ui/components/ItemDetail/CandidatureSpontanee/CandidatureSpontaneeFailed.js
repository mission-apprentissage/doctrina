import { Box, Flex, Image, ModalBody, Text } from "@chakra-ui/react"
import React from "react"
import error2 from "../../../public/images/icons/input_value_error.svg"

const CandidatureSpontaneeFailed = ({ sendingState }) => {
  const errorReasonText = () => {
    let title = "Une erreur est survenue"
    let text = "Vous pourrez essayer ultérieurement"
    let dataTestId = "CandidatureSpontaneeFailedTitle"

    if (sendingState === "email temporaire non autorisé") {
      title = "Les adresses emails temporaires ne sont pas acceptées"
      text = (
        <>
          Les adresses emails temporaires ne sont pas acceptées pour envoyer des candidatures via La bonne alternance.
          <br />
          Merci d&apos;utiliser une adresse email permanente
        </>
      )
      dataTestId = "CandidatureSpontaneeFailedTempEmailTitle"
    } else if (sendingState === "Too Many Requests") {
      title = "Trop de candidatures envoyées en peu de temps"
      text = "Veuillez patienter quelques instants et réessayer"
      dataTestId = "CandidatureSpontaneeFailedTempEmailTitle"
    } else if (sendingState === "max candidatures atteint") {
      title = "Vous avez atteint le nombre maximum de candidature pour aujourd'hui"
      text = "Vous pourrez en envoyer de nouveau demain"
      dataTestId = "CandidatureSpontaneeFailedTempEmailTitle"
    }

    return (
      <>
        <Flex direction="row" alignItems="center">
          <Image src={error2} mr={4} alt="" />
          <Text as="h2" fontWeight={700} fontSize="20px" data-testid={dataTestId}>
            {title}
          </Text>
        </Flex>
        <Box mt={10} mb={12} fontSize="18px">
          {text}
        </Box>
      </>
    )
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
