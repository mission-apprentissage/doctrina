import { Box, Text, Textarea } from "@chakra-ui/react"
import React from "react"

const CandidatureSpontaneeMessage = ({ formik, kind }) => {
  const getClass = () => {
    let className = "mt-3 c-candidature-message"

    if (kind === "matcha") {
      className += " c-candidature-field "
      className += formik.touched.message ? `is-valid-${!formik.errors.message}` : "is-not-validated"
    }

    return className
  }

  const getFieldTitle = () => {
    return (
      <>
        Votre message au responsable du recrutement{" "}
        <Text as="span" fontSize="14px" color="grey.600">
          (Facultatif)
        </Text>
      </>
    )
  }

  const getFieldError = () => {
    let errorMsg = ""
    if (kind === "matcha") {
      if (formik.touched.message && formik.errors.message) {
        errorMsg = (
          <Box fontSize="12px" color="#e10600">
            {formik.errors.message}
          </Box>
        )
      } else {
        errorMsg = <Box display="none">{"pas d'erreur"}</Box>
      }
    }
    return errorMsg
  }

  return (
    <>
      <Box data-testid="fieldset-message" className={getClass()}>
        <Text as="h2" mb="0" color="#161616">
          {getFieldTitle()}
        </Text>
        <Text mb={2} fontSize="14px" color="grey.600">
          Indiquez pourquoi vous souhaitez réaliser votre alternance dans son établissement. <br />
          Un message personnalisé augmente vos chances d&apos;obtenir un contact avec le recruteur. <br />
          La taille du champ n&apos;est pas limitée.
        </Text>
        <Textarea id="message" data-testid="message" name="message" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.message} size="xl" />
      </Box>
      {getFieldError()}
    </>
  )
}

export default CandidatureSpontaneeMessage
