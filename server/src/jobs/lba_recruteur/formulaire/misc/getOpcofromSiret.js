import { logger } from "../../../../common/logger.js"
import { Formulaire } from "../../../../common/model/index.js"
import { asyncForEach } from "../../../../common/utils/asyncUtils.js"
import { runScript } from "../../../scriptWrapper.js"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

runScript(async ({ etablissementsRecruteur }) => {
  const form = await Formulaire.find({ $or: [{ opco: { $exists: false } }, { opco: null }] })
  logger.info(`${form.length} entreprise à rechercher`)
  let stat = { found: 0, multiple: 0, notFount: 0 }

  await asyncForEach(form, async (f) => {
    let opcoResult = await etablissementsRecruteur.getOpco(f.siret)

    switch (opcoResult.data?.searchStatus) {
      case "OK":
        f.opco = opcoResult.data?.opcoName
        f.idcc = opcoResult.data?.idcc
        stat.found++
        break

      case "MULTIPLE_OPCO":
        f.opco = "Opco multiple"
        f.idcc = "Opco multiple, IDCC non définit"
        stat.multiple++
        break

      case "NOT_FOUND":
        opcoResult = await etablissementsRecruteur.getIdcc(req.params.siret)
        if (opcoResult.data[0].conventions?.length !== 0) {
          const { num } = opcoResult.data[0]?.conventions[0]
          opcoResult = await etablissementsRecruteur.getOpcoByIdcc(num)

          f.opco = opcoResult.data?.opcoName ?? undefined
          f.idcc = opcoResult.data?.idcc ?? undefined
          return
        }
        stat.notFount++
        break

      default:
        break
    }

    await f.save()
    count++
    await delay(900)
  })

  return { count }
})
