import { OPCOS } from "../../constants.js"

export const referentielOpcoSchema = {
  opco_label: {
    type: String,
    required: true,
    enum: Object.values(OPCOS),
    description: "D√©nomination de l'opco",
  },
  siret_code: {
    type: String,
    description: "Siret de l'√©tablissement",
    index: true,
  },
  emails: {
    type: [String],
    description: "Liste des emails disponibles pour l'√©tablissement",
    index: true,
  },
}
