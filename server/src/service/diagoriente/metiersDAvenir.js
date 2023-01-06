import axios from "axios"
import dayjs from "dayjs"
//import { manageApiError } from "../../common/utils/errorManager.js"

let diagorienteToken = null

const clientId = "config.diagoriente.clientId"
const clientSecret = "config.diagoriente.clientSecret"

const paramApi = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
const accessTokenEndpoint = "https://auth.diagoriente.beta.gouv.fr/auth/realms/<realm>/protocol/openid-connect/token"
const headers = { "Content-Type": "application/x-www-form-urlencoded" }

/*POST https://auth.diagoriente.beta.gouv.fr/auth/realms/<realm>/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=[identifiant client]
&client_secret=[clé secrète]*/

const getAccessToken = async () => {
  try {
    const now = dayjs()

    if (diagorienteToken && diagorienteToken.expiry.isAfter(now)) return diagorienteToken.value

    const response = await axios.post(accessTokenEndpoint, paramApi, headers)

    if (response.data) {
      diagorienteToken = {
        value: response.data.access_token,
        expiry: dayjs().add(response.data.expires_in - 10, "s"),
      }
      return diagorienteToken.value
    } else return "no_result"
  } catch (error) {
    console.log(error)
    return "error"
  }
}

export const getMetiersDAvenir = async () => {
  try {
    const token = await getAccessToken()

    /*
    let headers = peApiHeaders
    headers.Authorization = `Bearer ${token}`

    const job = await axios.get(`${peJobApiEndpoint}${id}`, {
      headers,
    })

    //throw new Error("boom");

    if (job.status === 204 || job.status === 400) {
      if (caller) {
        trackApiCall({ caller, api: "jobV1/job", result: "Error" })
      }

      return { result: "not_found", message: "Offre non trouvée" }
    } else {
      let peJob = transformPeJobForIdea({ job: job.data, caller })

      if (caller) {
        trackApiCall({ caller, nb_emplois: 1, result_count: 1, api: "jobV1/job", result: "OK" })
      }

      return { peJobs: [peJob] }
    }*/
    return {
      metiersDAvenir: [
        {
          title: "metier d'avcenir 1",
          romes: ["A1000", "V1000"],
        },
        {
          title: "metier d'avcenir 2",
          romes: ["C1000", "D1000"],
        },
      ],
    }
  } catch (error) {
    console.log("error")
    return {
      error: "pshiiit",
    }
    //return manageApiError({ error, api: "jobV1/job", caller, errorTitle: "getting job by id from PE" })
  }
}
