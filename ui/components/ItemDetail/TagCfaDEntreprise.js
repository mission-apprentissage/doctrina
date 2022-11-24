import React from "react"
import smileyIcon from "../../public/images/smiley.svg"
import { Image, Text } from "@chakra-ui/react"

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
  color: "greensoft.600",
  background: "greensoft.200",
}

const TagCfaDEntreprise = () => {
  return (
    <Text as="span" {...tagProperties}>
      <Image width="16px" mb="-2px" src={smileyIcon} alt="" />
      <Text whiteSpace="nowrap" as="span" ml={1}>
        CFA d&apos;entreprise
      </Text>
    </Text>
  )
}

export default TagCfaDEntreprise
