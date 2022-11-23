import React from "react"
import toggleList from "../../../public/images/icons/toggleList.svg"
import toggleCard from "../../../public/images/icons/toggleCard.svg"
import { SearchResultContext } from "../../../context/SearchResultContextProvider"
import { DisplayContext } from "../../../context/DisplayContextProvider"
import { Box, Button, Image, Text } from "@chakra-ui/react"

const MapListSwitchButton = ({ showResultMap, showResultList, isFormVisible }) => {
  const { hasSearch } = React.useContext(SearchResultContext)
  const { visiblePane } = React.useContext(DisplayContext)

  /*

.demoPage .floatingButtons button {
  cursor: pointer;
  margin-right: 30px;
  background-color: $gray-750;
  font-size: 14px;
  color: #fff;
  border-radius: 58px;
  border: none;
  padding: 10px 20px;
  margin-top: -2rem;
}
.demoPage .floatingButtons button:focus {
  box-shadow: none;
}


.widgetTestPage .floatingButtons button {
  cursor: pointer;
  margin-right: 30px;
  background-color: #0061df;
  font-size: 14px;
  color: #fff;
  border-radius: 19px;
  border: none;
  padding: 10px 20px;
}
.widgetTestPage .floatingButtons button:focus {
  box-shadow: none;

  */

  const floatingButtonProperties = {
    position: "fixed",
    bottom: ["2.5rem", "1.5rem"],
    left: "50%",
    right: ["unset", "40%"],
    transform: "translateX(-40%)",
  }
  const resultListFloatingButtonDisplayProperty = isFormVisible ? "none" : ["block", "block", "none"]
  const mapFloatingButtonDisplayProperty = ["block", "block", "none"]

  if (visiblePane === "resultList") {
    if (hasSearch)
      return (
        <Box display={resultListFloatingButtonDisplayProperty} {...floatingButtonProperties}>
          <Button onClick={showResultMap} className="d-flex align-items-center">
            <Image src={toggleCard} alt="Basculer vers la carte" />
            <Text as="span" className="ml-2 c-resultlist-card">
              Carte
            </Text>
          </Button>
        </Box>
      )
    else return ""
  } else {
    return (
      <Box display={mapFloatingButtonDisplayProperty} {...floatingButtonProperties}>
        {hasSearch ? (
          <Button onClick={showResultList} className="d-flex align-items-center">
            <Image src={toggleList} alt="Basculer vers la liste" />
            <Text as="span" className="ml-2 c-resultlist-card">
              Liste
            </Text>
          </Button>
        ) : (
          ""
        )}
      </Box>
    )
  }
}

export default MapListSwitchButton
