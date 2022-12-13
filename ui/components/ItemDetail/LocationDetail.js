import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import { round } from "lodash"
import React from "react"
import gotoIcon from "../../public/images/icons/goto.svg"
import { capitalizeFirstLetter, endsWithNumber } from "../../utils/strutils"
import { getCompanyPathLink, getPathLink } from "../../utils/tools"
import { string_wrapper as with_str } from "../../utils/wrapper_utils"
import ExternalLink from "../externalLink"

const LocationDetail = ({ item, isCfa }) => {
  const kind = item?.ideaType

  const getGoogleSearchParameters = () => {
    return encodeURIComponent(`${item.company.name} ${item.place.address}`)
  }

  let companySize = item?.company?.size?.toLowerCase()
  if (!companySize) {
    companySize = "non renseigné"
  } else if (companySize.startsWith("0")) {
    companySize = "0 à 9 salariés"
  }
  if (endsWithNumber(companySize)) {
    companySize += " salariés"
  }

  const getTitle = (oneItem) => {
    const oneKind = oneItem?.ideaType
    const isMandataire = item?.company?.mandataire
    let res = "Quelques informations sur l'entreprise"
    if (oneKind === "formation") {
      res = "Quelques informations sur le centre de formation"
    } else if (oneKind === "matcha" && !isMandataire) {
      res = "Quelques informations sur l'établissement"
    } else if (oneKind === "matcha" && isMandataire) {
      res = "Contactez le CFA pour avoir plus d'informations"
    }
    return res
  }

  const shouldDisplayEmail = (oneItem) => {
    let res = false
    const oneKind = oneItem?.ideaType
    if (oneKind === "matcha") {
      res = !!item?.company?.mandataire
    } else if (oneKind === "lbb" || oneKind === "lba") {
      res = false
    } else if (oneKind === "peJob") {
      res = false
    } else {
      res = !!item?.contact?.email && !item?.prdvUrl
    }
    if (res) {
      // au cas où : on n'affiche l'email que si il n'est pas chiffré
      res = with_str("@").in(item?.contact?.email)
    }
    return res
  }

  return (
    <>
      {kind === "matcha" && item?.company?.mandataire && (
        <Box pb="0px" mt={6} position="relative" background="white" padding={["1px 12px 50px 12px", "1px 24px 50px 24px", "1px 12px 24px 12px"]} mx={["0", "30px"]}>
          <Text as="h2" variant="itemDetailH2" mt={2}>
            {getTitle({})}
          </Text>

          <Box mt={2}>
            <strong>Taille de l&apos;entreprise :&nbsp;</strong> {companySize}
          </Box>
          <Box mt={2}>
            <strong>Secteur d&apos;activité :&nbsp;</strong> {item?.nafs[0]?.label}
          </Box>
          {item?.company?.creationDate && !isNaN(new Date(item.company.creationDate)) && (
            <Box mt={2}>
              <strong>Année de création de l&apos;entreprise :&nbsp;</strong> {new Date(item.company.creationDate).getFullYear()}
            </Box>
          )}

          <Box mt={3} color="grey.700">
            {item?.company?.place?.city}
          </Box>
          {item?.place?.distance && <Box fontSize="14px" color="grey.600">{`${round(item.place.distance, 1)} km(s) du lieu de recherche`}</Box>}

          <Flex mt={4} alignItems="center" direction="row">
            <Image mt="2px" mr={2} src="/images/icons/small_map_point.svg" alt="" />
            <Link variant="basicUnderlined" url={getCompanyPathLink(item)}>
              Obtenir l'itinéraire <ExternalLinkIcon mb="3px" ml="2px" />
            </Link>
          </Flex>
        </Box>
      )}

      <Box pb="0px" mt={6} position="relative" background="white" padding={["1px 12px 50px 12px", "1px 24px 50px 24px", "1px 12px 24px 12px"]} mx={["0", "30px"]}>
        <Text as="h2" variant="itemDetailH2" mt={2}>
          {getTitle(item)}
        </Text>

        {item?.company?.mandataire && (
          <div className="c-locationdetail-address mt-4">Le centre de formation peut vous renseigner sur cette offre d’emploi ainsi que les formations qu’il propose.</div>
        )}

        <div className="c-locationdetail-address mt-4">{item?.place?.fullAddress}</div>

        {item?.place?.distance && !item?.company?.mandataire && <div className="c-locationdetail-distance">{`${round(item.place.distance, 1)} km(s) du lieu de recherche`}</div>}

        <div className="c-locationdetail-line mt-3">
          <span className="c-locationdetail-imgcontainer">
            <img className="" src="/images/icons/small_map_point.svg" alt="" />
          </span>
          <span className="c-detail-sizetext">
            <ExternalLink
              className={`c-nice-link font-weight-normal gtm${capitalizeFirstLetter(kind)} gtmPathLink`}
              url={getPathLink(item)}
              title="Obtenir l'itinéraire"
              withPic={<img className="mt-n1 ml-1" src="/images/square_link.svg" alt="Ouverture dans un nouvel onglet" />}
            />
          </span>
        </div>

        {item?.company?.url && (
          <div className="c-locationdetail-line mt-1">
            <span className="c-locationdetail-imgcontainer">
              <img className="" src="/images/icons/small_info.svg" alt="A noter" />
            </span>
            <span className="c-detail-sizetext">
              <span className="">En savoir plus sur &nbsp;</span>
              <ExternalLink className="c-nice-link gtmTrainingLink" url={item.company.url} title={item.company.url} />
            </span>
          </div>
        )}

        {shouldDisplayEmail(item) && (
          <div className="c-locationdetail-line mt-1">
            <span className="c-locationdetail-imgcontainer">
              <img className="" src="/images/icons/small_email.svg" alt="Email" />
            </span>
            <span className="c-detail-sizetext">{item.contact.email}</span>
          </div>
        )}

        {item?.contact?.phone && (
          <div className="c-locationdetail-line mt-1 mb-3">
            <span className="c-locationdetail-imgcontainer c-locationdetail-imgcontainer--smallphone">
              <img className="" src="/images/icons/small_phone.svg" alt="Téléphone" />
            </span>
            <ExternalLink
              className="c-nice-link"
              url={`tel:${item.contact.phone}`}
              title={item.contact.phone}
              withPic={<img src={gotoIcon} alt={`Lien cliquable vers le numéro ${item.contact.phone}`} />}
            />
          </div>
        )}

        {isCfa && (
          <Box pb={4} background="#f6f6f6" borderRadiux="8px" p="10px">
            <Flex alignItems="center" pt={1} pb={2}>
              <Image src="/images/info.svg" alt="" width="24px" height="24px" />
              <Text as="span" ml={2} fontWeight={700}>
                Cet établissement est un CFA d&apos;entreprise
              </Text>
            </Flex>
            <Text>
              La particularité ? Il s&apos;agit d&apos;une formule complète <strong>Emploi + Formation</strong> ! Cette formation vous intéresse ? La marche à suivre diffère selon
              le CFA d&apos;entreprise concerné :
            </Text>

            <Box mt={3}>
              &bull;{" "}
              <Text as="span" ml={4}>
                Commencez par vous inscrire à la formation pour accéder ensuite au contrat,
              </Text>
            </Box>
            <Box mt={2}>
              &bull;{" "}
              <Text as="span" ml={4}>
                Ou commencez par postuler à une offre d&apos;emploi pour être ensuite inscrit en formation.
              </Text>
            </Box>

            <Text>Prenez contact avec cet établissement ou consultez son site web pour en savoir + !</Text>

            <Box my={2}>
              Vous vous posez des questions sur votre orientation ou votre recherche d&apos;emploi ?&nbsp;
              <Link
                isExternal
                variant="basicUnderlined"
                href="https://dinum-beta.didask.com/courses/demonstration/60abc18c075edf000065c987"
                aria-label="Lien vers des conseils pour préparer son premier contact avec un CFA"
              >
                Préparez votre premier contact avec un CFA&nbsp;
                <ExternalLinkIcon mb="3px" ml="2px" />
              </Link>
            </Box>
          </Box>
        )}

        {(kind === "matcha" || kind === "lbb" || kind === "lba") && (
          <>
            <div className="c-locationdetail-line mt-1">
              <span className="c-locationdetail-imgcontainer">
                <img className="" src="/images/info.svg" alt="A noter" />
              </span>
              <span className="c-detail-sizetext mb-0">
                En savoir plus sur&nbsp;
                <ExternalLink
                  className="c-nice-link gtmGoogleLink"
                  url={`https://www.google.fr/search?q=${getGoogleSearchParameters()}`}
                  title={item.company.name}
                  withPic={<img className="mt-n1 ml-1" src="/images/square_link.svg" alt="Ouverture dans un nouvel onglet" />}
                />
              </span>
            </div>
            <div className="c-locationdetail-line mt-1 mb-1">
              <span className="c-locationdetail-imgcontainer"></span>
              <span className="c-detail-sizetext c-locationdetail-hint">Renseignez-vous sur l&apos;établissement pour préparer votre candidature</span>
            </div>
            {!item?.company?.mandataire && (
              <div className="c-locationdetail-line mb-1">
                <span className="c-locationdetail-imgcontainer"></span>
                <span className="c-detail-sizetext">
                  <strong>Taille de l&apos;entreprise :&nbsp;</strong> {companySize}
                </span>
              </div>
            )}
          </>
        )}
      </Box>
    </>
  )
}

export default LocationDetail
