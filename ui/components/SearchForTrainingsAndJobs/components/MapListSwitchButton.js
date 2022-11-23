import React from "react"
import toggleList from "../../../public/images/icons/toggleList.svg"
import toggleCard from "../../../public/images/icons/toggleCard.svg"
import { SearchResultContext } from "../../../context/SearchResultContextProvider"
import { DisplayContext } from "../../../context/DisplayContextProvider"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

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
          <Button onClick={showResultMap} title="Afficher la carte">
            <Flex alignItems="center">
              <Image src={toggleCard} alt="" />
              <Text as="span" marginLeft={2} className="c-resultlist-card">
                Carte
              </Text>
            </Flex>
          </Button>
        </Box>
      )
    else return ""
  } else {
    return (
      <Box display={mapFloatingButtonDisplayProperty} {...floatingButtonProperties}>
        {hasSearch ? (
          <Button onClick={showResultList} title="Afficher la liste">
            <Flex alignItems="center">
              <Image src={toggleList} alt="" />
              <Text as="span" marginLeft={2} className="c-resultlist-card">
                Liste
              </Text>
            </Flex>
          </Button>
        ) : (
          ""
        )}
      </Box>
    )
  }
}

export default MapListSwitchButton
