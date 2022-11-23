import React from "react"
import FilterButton from "./FilterButton"
import purpleFilterIcon from "../../../public/images/icons/purpleFilter.svg"
import { Box, Flex, Spinner, Text } from "@chakra-ui/react"

const ResultListsCounter = (props) => {
  const scopeContext = props.scopeContext
  const filterButtonClicked = props.filterButtonClicked
  const displayCount = props.displayCount
  const getJobCount = props.getJobCount
  const allJobSearchError = props.allJobSearchError
  const trainingSearchError = props.trainingSearchError
  const isTrainingSearchLoading = props.isTrainingSearchLoading
  const isJobSearchLoading = props.isJobSearchLoading
  const jobs = props.jobs
  const trainings = props.trainings
  const activeFilter = props.activeFilter
  const showSearchForm = props.showSearchForm

  if (allJobSearchError && trainingSearchError) return ""

  let count = 0

  let jobPart = ""
  let jobLoading = ""
  let jobCount = 0

  if (scopeContext.isJob) {
    if (isJobSearchLoading) {
      jobLoading = (
        <Flex p={5} color="pinksoft.600">
          <Text mr={4}>Recherche des entreprises en cours</Text>
          <Spinner thickness="4px" />
        </Flex>
      )
    } else if (!allJobSearchError) {
      jobCount = getJobCount(jobs)
      count += jobCount
      jobPart = `${jobCount === 0 ? "aucune entreprise" : jobCount}`

      if (jobCount === 1) {
        jobPart += " entreprise"
      } else if (jobCount > 1) {
        jobPart += " entreprises"
      }
    }
  }

  let trainingCount = 0
  let trainingPart = ""
  let trainingLoading = ""

  if (scopeContext.isTraining) {
    if (isTrainingSearchLoading) {
      trainingLoading = (
        <Flex p={5} color="greensoft.500">
          <Text>Recherche des formations en cours</Text>
          <Spinner thickness="4px" />
        </Flex>
      )
    } else if (!trainingSearchError) {
      trainingCount = trainings ? trainings.length : 0

      count += trainingCount

      trainingPart = `${trainingCount === 0 ? "Aucune formation" : trainingCount}`

      if (trainingCount === 1) {
        trainingPart += " formation"
      } else if (trainingCount > 1) {
        trainingPart += " formations"
      }
    }
  }

  const resultListProperties = {
    textAlign: "left",
    marginLeft: "10px",
    color: "grey.650",
    fontWeight: 600,
    fontSize: "22px",
    marginBottom: "0px",
    padding: "0 20px",
    mt: [0, 0, 2],
  }

  const filterZoneProperties = {
    justifyContent: "left",
    paddingLeft: "31px",
    marginBottom: "4px",
    alignItems: ["left", "left", "left", "center"],
  }

  return (
    <Box pt="0">
      <Box {...resultListProperties}>
        {trainingLoading}
        {jobLoading}
      </Box>

      <Flex direction={["column", "column", "column", "row"]} wrap="wrap" mt={4} {...filterZoneProperties}>
        {!trainingLoading && !jobLoading && scopeContext.isJob && scopeContext.isTraining ? (
          <>
            <Box mr={4} textAlign="left" fontSize="14px" display={["none", "none", "block"]}>
              Que souhaitez-vous voir ?
            </Box>
            <Flex>
              <FilterButton type="all" count={jobCount + trainingCount} isActive={activeFilter === "all"} handleFilterButtonClicked={filterButtonClicked} />
              <FilterButton type="jobs" count={jobCount} isActive={activeFilter === "jobs"} handleFilterButtonClicked={filterButtonClicked} />
              <FilterButton type="trainings" count={trainingCount} isActive={activeFilter === "trainings"} handleFilterButtonClicked={filterButtonClicked} />
              <div className="c-resultlist-purplefilter" onClick={showSearchForm}>
                <img src={purpleFilterIcon} alt="Filtrer les résultats" />
              </div>
            </Flex>
          </>
        ) : (
          ""
        )}
      </Flex>
    </Box>
  )
}

export default ResultListsCounter
