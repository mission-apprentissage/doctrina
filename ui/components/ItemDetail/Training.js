import React, { useState, useContext } from "react"
import trainingIcon from "../../public/images/icons/book.svg"
import { fetchAddresses } from "../../services/baseAdresse"
import extendedSearchPin from "../../public/images/icons/jobPin.svg"
import { ScopeContext } from "../../context/ScopeContext"
import TagCfaDEntreprise from "./TagCfaDEntreprise"
import TagFormation from "./TagFormation"
import { setSelectedMarker } from "../../utils/mapTools"
import { getItemQueryParameters } from "../../utils/getItemId"
import { getSearchQueryParameters } from "../../utils/getSearchParameters"
import { SearchResultContext } from "../../context/SearchResultContextProvider"
import { ParameterContext } from "../../context/ParameterContextProvider"
import { DisplayContext } from "../../context/DisplayContextProvider"
import { Button, Image, Link, Text } from "@chakra-ui/react"

const Training = ({ training, handleSelectItem, showTextOnly, searchForJobsOnNewCenter, hasAlsoJob, isCfa }) => {
  const { selectedMapPopupItem } = React.useContext(SearchResultContext)
  const { itemParameters } = React.useContext(ParameterContext)
  const { formValues } = React.useContext(DisplayContext)
  const scopeContext = useContext(ScopeContext)

  const currentSearchRadius = formValues?.radius || 30

  const [allowDim, setAllowDim] = useState(true) // cet état évite un appel qui masque la mise en avant de l'icône lors de l'ouverture du détail

  const onSelectItem = (e) => {
    e.preventDefault()
    setAllowDim(false) // fixation du flag
    handleSelectItem(training, "training")
  }

  const shouldBeHighlighted = () => {
    if (selectedMapPopupItem?.ideaType === "formation") {
      return selectedMapPopupItem.items.find((item) => {
        return item.id === training.id
      })
    } else {
      return false
    }
  }

  const centerSearchButtonProperties = {
    color: "#ff8d7e",
    display: "flex",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "0px 5px 10px 0",
    fontSize: "14px",
    width: "fit-content",
  }

  const getCenterSearchOnTrainingButton = () => {
    return (
      <Button title="Voir les entreprises proches" {...centerSearchButtonProperties} onClick={centerSearchOnTraining}>
        <Image mb="2px" mr="5px" src={extendedSearchPin} alt="" />{" "}
        <Text textDecoration="underline" as="span">
          Voir les entreprises proches
        </Text>
      </Button>
    )
  }

  const centerSearchOnTraining = async (e) => {
    if (e) {
      e.stopPropagation()
      e.preventDefault()
    }

    // reconstruction des critères d'adresse selon l'adresse du centre de formation
    const label = `${training.place.city} ${training.place.zipCode}`

    // récupération du code insee depuis la base d'adresse
    if (!training.place.insee) {
      const addresses = await fetchAddresses(label, "municipality")
      if (addresses.length) {
        training.place.insee = addresses[0].insee
      }
    }

    const newCenter = {
      insee: training.place.insee,
      label,
      zipcode: training.place.zipCode,
      value: {
        type: "Point",
        coordinates: [training.place.longitude, training.place.latitude],
      },
    }

    searchForJobsOnNewCenter(newCenter)
  }

  const highlightItemOnMap = () => {
    setSelectedMarker(training)
  }

  const dimItemOnMap = (e) => {
    if (allowDim) {
      setSelectedMarker(null)
    } else {
      setAllowDim(true)
    }
  }

  const actualLink = `/recherche-apprentissage?display=list&page=fiche&${getItemQueryParameters(training)}&${getSearchQueryParameters(formValues)}`

  /*
  .itemDetail .resultCard {
    box-shadow: none;
  }
  */
  let cardProperties = {
    color: "grey.650",
    cursor: "pointer",
    bg: "white",
    textAlign: "left",
    m: ["0.5rem 0", "18px 25px", "0.5rem 0", "0.5rem 25px"],
    p: ["20px 10px", "20px 25px", "20px 10px", "20px 25px"],
    _hover: {
      textDecoration: "none",
      color: "inherit",
    },
  }

  if (shouldBeHighlighted()) {
    cardProperties.filter = "drop-shadow(0px 0px 8px rgba(30, 30, 30, 0.25))"
  }

  return (
    <Link as="a" className="resultCard" {...cardProperties} onClick={onSelectItem} onMouseOver={highlightItemOnMap} onMouseOut={dimItemOnMap} href={actualLink}>
      <div className="c-media" id={`id${training.id}`}>
        <div className="c-media-body">
          <div className="row no-gutters">
            <div className="col-12 col-lg-6 text-left">
              <div className="title d-inline-block">{training.title ? training.title : training.longTitle}</div>
            </div>
            <div className="col-12 col-lg-6  d-lg-flex flex-column text-left text-lg-right my-1 my-lg-0">{isCfa ? <TagCfaDEntreprise /> : <TagFormation />}</div>
          </div>

          <div className="cardText pt-3 pt-lg-1">{training.company.name}</div>
          <div className="cardText pt-2">{training.place.fullAddress}</div>
          {itemParameters?.mode === "debug" ? <div className="cardText pt-2">{`${training.rncpCode} - romes :${training.romes.map((rome) => " " + rome.code)}`}</div> : ""}
          <span className="cardDistance pt-1">
            {training.place.distance !== null ? `${Math.round(training.place.distance)} km(s) du lieu de recherche` : ""}
            {showTextOnly ? (
              ""
            ) : (
              <>
                <span className="knowMore d-none d-md-block">
                  <button className="c-resultcard-knowmore">En savoir plus</button>
                </span>
              </>
            )}
          </span>
          {showTextOnly ? (
            ""
          ) : (
            <>{(training.place.distance === null || Math.round(training.place.distance) > currentSearchRadius) && scopeContext.isJob ? getCenterSearchOnTrainingButton() : ""}</>
          )}
        </div>
      </div>
    </Link>
  )
}

/*
  


.resultCard .cardDistance {
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: $gray-600;
}

.resultCard .knowMore button.c-resultcard-knowmore {
  font-size: 14px;
  margin-left: auto;
  line-height: 17px;
}

.cardText {
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}
.resultCard .title {
  font-size: 16px;
  font-weight: bold;
  color: #000;
}
.resultCard .body {
  font-size: 14px;
}
.resultCard .body > div {
  margin-top: 5px;
}
.resultCard .knowMore {
  margin-left: auto;
}
.resultCard .knowMore button {
  color: $gray-700 !important;
  background: none;
  border: none;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 5px;
  padding-top: 0px;
  width: fit-content;
  border-bottom: 2px solid $gray-700;
}
.resultCard .knowMore button:hover {
  color: #000;
}
.resultCard .hasJob {
  font-weight: bold;
}
.resultCard .companySize > img {
  margin-right: 5px;
  margin-top: -5px;
}
.resultCard .body a,
.resultCard .body a:hover,
.resultCard .body a:visited {
  color: black;
}
*/

export default Training
