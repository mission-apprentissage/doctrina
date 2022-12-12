import React from "react"
import TagCandidatureSpontanee from "../../components/ItemDetail/TagCandidatureSpontanee.js"
import ExternalLink from "../externalLink"
import gotoIcon from "../../public/images/icons/goto.svg"
import { Link, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const DidYouKnow = ({ item }) => {
  return (
    <>
      <div className="c-detail-body c-locationdetail mt-4">
        <h2 className="c-locationdetail-title mt-2">Le saviez-vous ?</h2>
        <p className="c-didyouknow-paragraph">
          Diversifiez vos démarches en envoyant aussi des candidatures spontanées aux entreprises qui n&apos;ont pas diffusé d&apos;offre! Repérez les tags suivants dans la liste
          de résultats
        </p>
        <p>
          <TagCandidatureSpontanee />
        </p>
        <Text pb={4}>
          <Text>Un employeur vous a proposé un entretien ?</Text>
          <Text>
            <Link isExternal fontWeight={700} href="https://dinum-beta.didask.com/courses/demonstration/60d1adbb877dae00003f0eac" variant="basicUnderlined">
              On vous donne des conseils pour vous aider à le préparer. <ExternalLinkIcon mb="3px" ml="2px" />
            </Link>
          </Text>
        </Text>
      </div>
    </>
  )
}

export default DidYouKnow
