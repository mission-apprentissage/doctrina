export const emailBlacklist = {
  email: {
    type: String,
    default: null,
    description: "L'adresse d'un √©tablissement",
    index: true,
    unique: true,
  },
  source: {
    type: String,
    default: null,
    description: "Source de l'information de blacklisting",
  },
}
