import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import dropzoneIco from "../../../public/images/icons/candidature_file_upload.svg"
import { Box, Button, Flex, FormErrorMessage, Image, Input, Spinner, Text } from "@chakra-ui/react"

const CandidatureSpontaneeFileDropzone = ({ setFileValue, formik }) => {
  const [fileData, setFileData] = useState(formik.values.fileName ? { fileName: formik.values.fileName, fileContent: formik.values.fileContent } : null)
  const [fileLoading, setFileLoading] = useState(false)
  const [showUnacceptedFileMessage, setShowUnacceptedFileMessages] = useState(false)

  const onRemoveFile = () => {
    setFileValue(null)
    setFileData(null)
  }

  const onDrop = (files) => {
    const reader = new FileReader()
    let fileName = null

    reader.onload = (e) => {
      let readFileData = { fileName, fileContent: e.target.result }
      setFileData(readFileData)
      setFileValue(readFileData)
    }

    reader.onloadstart = (e) => {
      setFileLoading(true)
      setShowUnacceptedFileMessages(false)
    }

    reader.onloadend = (e) => {
      setTimeout(() => {
        setFileLoading(false)
      }, 300)
    }

    if (files.length) {
      fileName = files[0].name
      reader.readAsDataURL(files[0])
    } else {
      setShowUnacceptedFileMessages(true)
      setFileData(null)
    }
  }

  const getSpinner = () => {
    return (
      <Flex alignItems="center" direction="row">
        <Spinner mr={4} />
        <Text>Chargement du fichier en cours</Text>
      </Flex>
    )
  }

  const getFileDropzone = () => {
    return (
      <>
        <Input {...getInputProps()} data-testid="fileDropzone" />
        {isDragActive ? (
          <Text>Déposez le fichier ici</Text>
        ) : (
          <Flex direction="row" alignItems="center" className="c-candidature-filedropzone-instruction">
            <Image mr={2} alt="" src={dropzoneIco} />{" "}
            <Box>
              <Text className="c-candidature-filedropzone-instruction_title">Chargez votre CV ou déposez le ici</Text>
              <Text className="c-candidature-filedropzone-instruction_sub">Le CV doit être au format PDF ou DOCX et ne doit pas dépasser 3 Mo</Text>
            </Box>
          </Flex>
        )}
        {showUnacceptedFileMessage ? (
          <Text className="c-candidature-erreur visible">⚠ Le fichier n&apos;est pas au bon format (autorisé : .docx ou .pdf, &lt;3mo, max 1 fichier)</Text>
        ) : (
          ""
        )}
        {formik.touched && formik.errors.fileName && <FormErrorMessage>{formik.errors.fileName}</FormErrorMessage>}
      </>
    )
  }

  const getSelectedFile = () => {
    return (
      <Box fontSize="14px" fontWeight={700} color="grey.700" data-testid="selectedFile">
        Pièce jointe : { fileData.fileName }
        {
          <Button onClick={onRemoveFile} 
                  background="none" 
                  padding="0 0 4px"
                  fontSize="14px"
                  fontWeight={400}
                  ml={4}
                  height="fit-content"                  
                  borderRadius="0"
                  borderColor="grey.700" 
                  sx={{
                    borderBottom:"1px solid"
                  }} 
                  _hover={{
                    background:"none"}}
                  color="grey.700">
            supprimer
          </Button>
        }
      </Box>
    )
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".docx,.pdf",
    maxSize: 3145728,
    maxFiles: 1,
  })

  return (
    <Box className={`c-candidature-filedropzone`} {...getRootProps()}>
      {fileLoading ? getSpinner() : fileData?.fileName ? getSelectedFile() : getFileDropzone()}
    </Box>
  )
}

export default CandidatureSpontaneeFileDropzone
