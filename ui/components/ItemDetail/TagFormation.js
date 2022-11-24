import React from "react"

import bookIcon from "public/images/book.svg"
import { Flex, Image, Text } from "@chakra-ui/react"

/*
.c-media-tag.c-media-tag--2nd {
  margin-left: 0px;
  margin-top: 3px;
  margin-right: 4px;

  @include media-breakpoint-up(lg) {
    margin-left: 4px;
    margin-right: 0px;
  }
}


  */

const tagProperties = {
  fontSize: "12px",
  fontWeight: 700,
  display: "inline-flex",
  lineHeight: "15px",
  letterSpacing: "0px",
  margin: "3px 4px 0 0",
  width: "fit-content",
  borderRadius: "6px",
  padding: "0.5rem",
  paddingTop: "0.25rem",
  alignItems: "center",
  color: "greensoft.600",
  background: "greensoft.200",
}

const TagFormation = () => {
  return (
    <Text as="span" {...tagProperties}>
      <Image width="16px" mb="-2px" src={bookIcon} alt="" />
      <Text whiteSpace="nowrap" as="span" ml={1}>
        Formation
      </Text>
    </Text>
  )
}

export default TagFormation
