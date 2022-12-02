import React, { useState, useEffect } from "react"
import { useFormik } from "formik"
import CandidatureSpontaneeNominalBodyFooter from "./CandidatureSpontaneeNominalBodyFooter"
import CandidatureSpontaneeWorked from "./CandidatureSpontaneeWorked"
import CandidatureSpontaneeFailed from "./CandidatureSpontaneeFailed"
import submitCandidature from "./services/submitCandidature"
import toggleCandidature from "./services/toggleCandidature"
import { getValidationSchema, getInitialSchemaValues } from "./services/getSchema"
import { string_wrapper as with_str } from "../../../utils/wrapper_utils"
import useLocalStorage from "./services/useLocalStorage"
import hasAlreadySubmittedCandidature from "./services/hasAlreadySubmittedCandidature"
import { getItemId } from "../../../utils/getItemId"
import { SendPlausibleEvent } from "../../../utils/plausible"
import { Box, Button, Image, Modal, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

const CandidatureSpontanee = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sendingState, setSendingState] = useState("not_sent")
  const kind = props?.item?.ideaType || ""

  const uniqId = (kind, item) => {
    return `candidaturespontanee-${kind}-${getItemId(item)}`
  }

  const actualLocalStorage = props.fakeLocalStorage || window.localStorage || {}

  const toggle = () => {
    toggleCandidature({ isModalOpen, setSendingState, setIsModalOpen })
  }

  const openApplicationForm = () => {
    //toggle()
    onOpen()
    SendPlausibleEvent(props.item.ideaType === "matcha" ? "Clic Postuler - Fiche entreprise Offre LBA" : "Clic Postuler - Fiche entreprise Algo", {
      info_fiche: getItemId(props.item),
    })
  }

  const [applied, setApplied] = useLocalStorage(uniqId(kind, props.item), null, actualLocalStorage)

  useEffect(() => {
    setIsModalOpen(false)

    // HACK HERE : reapply setApplied to currentUniqId to re-detect
    // if user already applied each time the user swap to another item.
    let currentUniqId = actualLocalStorage.getItem(uniqId(kind, props.item))
    if (currentUniqId) {
      setApplied(currentUniqId)
    } else {
      // setApplied(null) is MANDATORY to avoid "already-applied message" when user swaps.
      setApplied(null)
    }
  }, [props?.item])

  const formik = useFormik({
    initialValues: getInitialSchemaValues(),
    validationSchema: getValidationSchema(kind),
    onSubmit: async (applicantValues) => {
      let success = await submitCandidature({ applicantValues, setSendingState, item: props.item })
      if (success) {
        setApplied(Date.now().toString())
      }
    },
  })

  return (
    <Box data-testid="CandidatureSpontanee">
      <Box>
        <Box my={4}>
          {hasAlreadySubmittedCandidature({ applied, isModalOpen }) ? (
            <Box data-testid="already-applied">
              Vous avez déjà postulé le{" "}
              {new Date(parseInt(applied, 10)).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Box>
          ) : (
            <>
              <Button
                ml={1}
                padding="8px 24px"
                color="white"
                background="bluefrance.500"
                borderRadius="8px"
                sx={{
                  textDecoration: "none",
                  _hover: {
                    background: "bluesoft.500",
                  },
                }}
                onClick={openApplicationForm}
                aria-label="jenvoie-une-candidature-spontanee"
              >
                J&apos;envoie ma candidature{with_str(kind).amongst(["lbb", "lba"]) ? " spontanée" : ""}
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} backdrop="static">
                <ModalOverlay />
                <ModalContent>
                  <form onSubmit={formik.handleSubmit} className="c-candidature-form">
                    <ModalHeader toggle={toggle} className={"c-candidature-modal-header"}></ModalHeader>

                    {with_str(sendingState).amongst(["not_sent", "currently_sending"]) ? (
                      <CandidatureSpontaneeNominalBodyFooter formik={formik} sendingState={sendingState} company={props?.item?.company?.name} item={props?.item} kind={kind} />
                    ) : (
                      <></>
                    )}

                    {with_str(sendingState).amongst(["ok_sent"]) ? (
                      <CandidatureSpontaneeWorked kind={kind} email={formik.values.email} company={props?.item?.company?.name} />
                    ) : (
                      <></>
                    )}

                    {with_str(sendingState).amongst(["not_sent_because_of_errors", "email temporaire non autorisé", "max candidatures atteint", "Too Many Requests"]) ? (
                      <CandidatureSpontaneeFailed sendingState={sendingState} />
                    ) : (
                      <></>
                    )}
                  </form>
                </ModalContent>
              </Modal>
            </>
          )}
        </Box>
        {props?.item?.company?.mandataire && (
          <Box display="flex" alignItems="center" my={4}>
            <Text as="span">
              <Image src="/images/icons/small_info.svg" alt="" />
            </Text>
            <Text as="span" ml={2} fontSize="12px" fontStyle="italic">
              Votre candidature sera envoyée au centre de formation en charge du recrutement pour le compte de l’entreprise.{" "}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default CandidatureSpontanee
