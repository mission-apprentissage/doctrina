import React, { useState, useEffect, useContext } from "react"
import { Input } from "reactstrap"
import { Formik, Form, ErrorMessage } from "formik"
import { AutoCompleteField } from "../../../components/AutoCompleteField/AutoCompleteField"

import { fetchAddresses } from "../../../services/baseAdresse"
import { DomainError } from "../../"
import { buildRayonsOptions, buildRayonsButtons } from "../../../services/buildRayons"
import handleSelectChange from "../../../services/handleSelectChange"
import { partialRight } from "lodash"
import domainChanged from "../../../services/domainChanged"
import { autoCompleteToStringFunction, compareAutoCompleteValues } from "../../../services/autoCompleteUtilities"
import updateValuesFromJobAutoComplete from "../../../services/updateValuesFromJobAutoComplete"
import formikUpdateValue from "../../../services/formikUpdateValue"
import { buildAvailableDiplomasOptions, buildAvailableDiplomasButtons } from "../../../services/buildAvailableDiplomas"
import validateFormik from "../../../services/validateFormik"
import { SearchResultContext } from "../../../context/SearchResultContextProvider"
import { ParameterContext } from "../../../context/ParameterContextProvider"
import { DisplayContext } from "../../../context/DisplayContextProvider"
import { Box, Button, Flex, Text } from "@chakra-ui/react"

const SearchForm = (props) => {
  const { hasSearch } = useContext(SearchResultContext)
  const { widgetParameters } = React.useContext(ParameterContext)
  const { formValues, isFormVisible } = React.useContext(DisplayContext)

  const [locationRadius, setLocationRadius] = useState(30)

  useEffect(() => {
    setLocationRadius(contextFormValues?.radius ?? 30)
    setDiploma(contextFormValues?.diploma ?? "")
    setJobValue(contextFormValues?.job ?? null)
  }, [widgetParameters?.applyFormValues])

  const contextFormValues = widgetParameters?.applyFormValues && widgetParameters?.formValues ? widgetParameters.formValues : formValues

  const [jobValue, setJobValue] = useState(null)
  const [diplomas, setDiplomas] = useState([])
  const [diploma, setDiploma] = useState("")
  const [domainError, setDomainError] = useState(false)
  const [diplomaError, setDiplomaError] = useState(false)

  const jobChanged = async function (val, setLoadingState) {
    let res = await domainChanged(val, setDomainError)
    setLoadingState("done")
    return res
  }

  const addressChanged = async function (val, setLoadingState) {
    let res = await fetchAddresses(val)
    setLoadingState("done")
    return res
  }

  const renderFormik = () => {
    return (
      <Formik
        validate={(values) => validateFormik(values, widgetParameters)}
        initialValues={{ job: {}, location: {}, radius: 30, diploma: "" }}
        onSubmit={props.handleSearchSubmit}
      >
        {({ isSubmitting, setFieldValue, errors }) => (
          <Form className={`c-searchform c-searchform--column is-home-${props.isHome}`}>
            <Box p="0">
              <Text as="h1" fontSize={["26px", "29px"]} fontWeight={700}>
                <Text as="span" display={{ base: "block", md: "inline" }}>
                  Se former et travailler{" "}
                </Text>
                <Text as="span" color="info" display={{ base: "block", md: "inline" }}>
                  en alternance
                </Text>
              </Text>
              <Flex direction={{ base: "column", lg: "row" }}>
                <Box mb={4}>
                  <Text as="p" my={2} fontWeight={700}>
                    Votre recherche
                  </Text>
                  <AutoCompleteField
                    kind="Métier ou diplôme *"
                    items={[]}
                    hasError={errors.job}
                    initialSelectedItem={contextFormValues?.job || null}
                    itemToStringFunction={autoCompleteToStringFunction}
                    onSelectedItemChangeFunction={partialRight(updateValuesFromJobAutoComplete, setDiplomas)}
                    compareItemFunction={compareAutoCompleteValues}
                    onInputValueChangeFunction={jobChanged}
                    name="jobField"
                    placeholder="Indiquez un métier ou diplôme"
                    searchPlaceholder="Indiquez un métier ou diplôme ci-dessus"
                    isDisabled={widgetParameters?.parameters?.jobName && widgetParameters?.parameters?.romes && widgetParameters?.parameters?.frozenJob}
                    splitItemsByTypes={[
                      { type: "job", typeLabel: "Métiers", size: 4 },
                      { type: "diploma", typeLabel: "Diplômes", size: 4 },
                      { typeLabel: "...autres métiers et diplômes" },
                    ]}
                  />
                  <ErrorMessage name="job" className="onErrorFieldColumn" component="div" />
                </Box>
                <Box mb={4}>
                  <AutoCompleteField
                    kind="Lieu"
                    items={[]}
                    hasError={errors.location}
                    initialSelectedItem={contextFormValues?.location ?? null}
                    itemToStringFunction={autoCompleteToStringFunction}
                    onSelectedItemChangeFunction={partialRight(formikUpdateValue, "location")}
                    compareItemFunction={compareAutoCompleteValues}
                    onInputValueChangeFunction={addressChanged}
                    name="placeField"
                    placeholder="Adresse, ville ou code postal"
                    searchPlaceholder="Indiquez le lieu recherché ci-dessus"
                  />
                  <ErrorMessage name="location" className="onErrorFieldColumn" component="div" />
                </Box>
                <Box mb={4}>
                  <div className="c-logobar-formgroup formGroup d-none d-md-block">
                    <label htmlFor="jobField" className="c-logobar-label">
                      Rayon
                    </label>
                    <div className="c-logobar-field">
                      <Input onChange={(evt) => handleSelectChange(evt, setFieldValue, setLocationRadius, "radius")} type="select" value={locationRadius} name="locationRadius">
                        {buildRayonsOptions()}
                      </Input>
                    </div>
                  </div>
                  <div className="d-block d-md-none formGroup">
                    <h3 className="h6 font-weight-bold">Rayon</h3>
                    <div className="c-logobar-field">{buildRayonsButtons(locationRadius, (evt) => handleSelectChange(evt, setFieldValue, setLocationRadius, "radius"))}</div>
                  </div>
                </Box>
                <Box mb={10}>
                  <div className="formGroup c-logobar-formgroup d-none d-md-block">
                    <div className="">
                      <label htmlFor="jobField" className="c-logobar-label">
                        Niveau d&apos;études visé
                      </label>
                      <div className="c-logobar-field">
                        <Input onChange={(evt) => handleSelectChange(evt, setFieldValue, setDiploma, "diploma")} value={diploma} type="select" name="diploma">
                          {buildAvailableDiplomasOptions(diplomas)}
                        </Input>
                      </div>
                    </div>
                  </div>
                  <div className="d-block d-md-none formGroup">
                    <h3 className="h6 font-weight-bold">Niveau d&apos;études visé</h3>
                    <div className="c-diplomas-buttons">
                      {buildAvailableDiplomasButtons(diploma, diplomas, (evt) => handleSelectChange(evt, setFieldValue, setDiploma, "diploma"))}
                    </div>
                  </div>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    py="0.35rem"
                    height="3rem"
                    fontSize="18px"
                    textDecoration="none"
                    fontWeight={700}
                    width="100%"
                    margin="auto"
                    variant="blackButton"
                    disabled={isSubmitting}
                    alt="Lancer la recherche"
                  >
                    C&apos;est parti
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>
    )
  }

  return (
    <div className={isFormVisible ? "" : "hiddenSearchForm"}>
      <div className="formGroup">
        {hasSearch && !props.isHome ? (
          <button className="c-detail-back px-3 py-1" onClick={props.showResultList}>
            ← Retour
          </button>
        ) : (
          ""
        )}
      </div>

      {domainError || diplomaError ? <DomainError setDomainError={setDomainError} setDiplomaError={setDiplomaError} /> : renderFormik()}
    </div>
  )
}

export default SearchForm
