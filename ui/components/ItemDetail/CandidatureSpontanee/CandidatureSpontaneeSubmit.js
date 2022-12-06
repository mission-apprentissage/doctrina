import { Button, Flex, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import { amongst } from "../../../utils/arrayutils"
import { capitalizeFirstLetter } from "../../../utils/strutils"

const CandidatureSpontaneeSubmit = (props) => {
  const sendingState = props.sendingState
  const kind = props?.item?.ideaType || ""

  let res = ""
  if (sendingState === "not_sent") {
    res = (
      <Button aria-label="je-postule" variant="blackButton" type="submit">
        {amongst(kind, ["lbb", "lba"]) ? "J'envoie ma candidature spontanée" : "J'envoie ma candidature"}
      </Button>
    )
  } else if (sendingState === "ok_sent") {
    res = (
      <Text as="span" data-testId="candidature-submit-ok">
        Succès
      </Text>
    )
  } else if (sendingState === "currently_sending") {
    res = (
      <Flex alignItems="center" direction="row">
        <Spinner mr={4} />
        <Text>Veuillez patienter</Text>
      </Flex>
    )
  } else if (sendingState === "not_sent_because_of_errors") {
    res = (
      <Text fontWeight={700} color="red.500" as="span" data-testId="candidature-submit-error">
        ⚠ Erreur lors de l&apos;envoi, veuillez réessayer plus tard
      </Text>
    )
  }
  return res
}

export default CandidatureSpontaneeSubmit
