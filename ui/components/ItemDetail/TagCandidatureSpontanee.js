import { Image, Text } from "@chakra-ui/react"
import React from "react"

import paperplaneIcon from "../../public/images/paperplane.svg"

const tagProperties = {
  fontSize: "12px",
  fontWeight: 700,
  display: "inline-flex",
  lineHeight: "15px",
  letterSpacing: "0px",
  margin: "3px 4px 0 0",
  width: "max-content",
  borderRadius: "6px",
  padding: "0.5rem",
  paddingTop: "0.25rem",
  alignItems: "center",
  color: "pinksoft.600",
  background: "pinksoft.200",
}

const TagCandidatureSpontanee = () => {
  return (
    <Text as="span" {...tagProperties}>
      <Image width="16px" mb="-2px" src={paperplaneIcon} alt="" />
      <Text whiteSpace="nowrap" as="span" ml={1}>
        Candidature spontanée
      </Text>
    </Text>
  )
}

export default TagCandidatureSpontanee
