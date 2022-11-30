import React, { useState, useEffect } from "react"
import glassImage from "../../public/images/glass_white.svg"
import { Formik, Form } from "formik"
import { AutoCompleteField } from ".."
import { buildAvailableDiplomasOptions } from "../../services/buildAvailableDiplomas"
import { buildRayonsOptions } from "../../services/buildRayons"
import { Input } from "reactstrap"
import { partialRight } from "lodash"
import { DomainError } from "../../components"

import domainChanged from "../../services/domainChanged"
import updateValuesFromJobAutoComplete from "../../services/updateValuesFromJobAutoComplete"
import formikUpdateValue from "../../services/formikUpdateValue"
import handleSelectChange from "../../services/handleSelectChange"

import { fetchAddresses } from "../../services/baseAdresse"
import { autoCompleteToStringFunction, compareAutoCompleteValues } from "../../services/autoCompleteUtilities"
import validateFormik from "../../services/validateFormik"
import { ParameterContext } from "../../context/ParameterContextProvider"
import { DisplayContext } from "../../context/DisplayContextProvider"
import { Box, Button, Image } from "@chakra-ui/react"

const HeaderForm = ({ handleSearchSubmit, isHome }) => {
  const { widgetParameters } = React.useContext(ParameterContext)
  const { formValues } = React.useContext(DisplayContext)

  const [locationRadius, setLocationRadius] = useState(30)

  useEffect(() => {
    setLocationRadius(contextFormValues?.radius ?? 30)
    setDiploma(contextFormValues?.diploma ?? "")
  }, [widgetParameters?.applyFormValues])

  const contextFormValues = widgetParameters?.applyFormValues && widgetParameters?.formValues ? widgetParameters.formValues : formValues

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
      <Formik validate={(values) => validateFormik(values, widgetParameters)} initialValues={{ job: {}, location: {}, radius: 30, diploma: "" }} onSubmit={handleSearchSubmit}>
        {({ isSubmitting, setFieldValue, errors, touched }) => (
          <Form className="c-logobar-form c-searchform">
            <Box className={`formGroup formGroup--logobar`}>
              <AutoCompleteField
                kind="Métier ou diplôme *"
                items={[]}
                hasError={errors.job}
                initialSelectedItem={contextFormValues?.job || null}
                itemToStringFunction={autoCompleteToStringFunction}
                onSelectedItemChangeFunction={partialRight(updateValuesFromJobAutoComplete, setDiplomas)}
                compareItemFunction={compareAutoCompleteValues}
                onInputValueChangeFunction={jobChanged}
                isDisabled={widgetParameters?.parameters?.jobName && widgetParameters?.parameters?.romes && widgetParameters?.parameters?.frozenJob}
                name="jobField"
                placeholder="Indiquez un métier ou diplôme"
                searchPlaceholder="Indiquez un métier ou diplôme ci-dessus"
                splitItemsByTypes={[
                  { type: "job", typeLabel: "Métiers", size: 4 },
                  { type: "diploma", typeLabel: "Diplômes", size: 4 },
                  { typeLabel: "...autres métiers et diplômes" },
                ]}
              />
            </Box>
            <Box className="ml-3">
              <Box className={`formGroup formGroup--logobar`}>
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
                  placeholder={isHome ? "A quel endroit ?" : "Adresse, ville ou code postal"}
                  searchPlaceholder="Indiquez le lieu recherché ci-dessus"
                />
              </Box>
            </Box>
            <Box className="ml-3">
              <div className="c-logobar-formgroup c-logobar-formgroup--rayon">
                <label htmlFor="jobField" className="c-logobar-label c-logobar-label--rayon">
                  Rayon
                </label>
                <div className="c-logobar-field">
                  <Input onChange={(evt) => handleSelectChange(evt, setFieldValue, setLocationRadius, "radius")} type="select" value={locationRadius} name="locationRadius">
                    {buildRayonsOptions()}
                  </Input>
                </div>
              </div>
            </Box>
            <Box className="c-logobar-formgroup c-logobar-formgroup--diploma ml-3">
              <label htmlFor="jobField" className="c-logobar-label c-logobar-label--diploma">
                Niveau d&apos;études visé
              </label>
              <div className="c-logobar-field">
                <Input onChange={(evt) => handleSelectChange(evt, setFieldValue, setDiploma, "diploma")} type="select" value={diploma} name="diploma">
                  {buildAvailableDiplomasOptions(diplomas)}
                </Input>
              </div>
            </Box>
            <Box className="c-logobar-formgroup ml-md-1 ml-lg-3 border-0 c-logobar-submit-container">
              <Button type="submit" variant="blackButton" disabled={isSubmitting} alt="Lancer la recherche" height="57px" paddingTop="3px">
                <Image height="24px" fontSize="18px" fontWeight={700} alt="Lancer la recherche" src={glassImage} />
                {isHome ? (
                  <Box fontSize="18px" mx={3} display={{ base: "none", xl: "inline-block" }}>
                    C&apos;est parti
                  </Box>
                ) : (
                  ""
                )}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    )
  }

  return <Box>{domainError || diplomaError ? <DomainError position="header" setDomainError={setDomainError} setDiplomaError={setDiplomaError} /> : renderFormik()}</Box>
}

export default HeaderForm
