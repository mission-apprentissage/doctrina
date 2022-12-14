import { optMode } from "../constants/etablissement.js"

export const etablissementSchema = {
  siret_formateur: {
    type: String,
    default: null,
    description: "Siret formateur",
  },
  siret_gestionnaire: {
    type: String,
    default: null,
    description: "Siret gestionnaire",
  },
  raison_sociale: {
    type: String,
    default: null,
    description: "Raison sociale",
  },
  adresse: {
    type: String,
    default: null,
    description: "Adresse",
  },
  code_postal: {
    type: String,
    default: null,
    description: "Code postal",
  },
  localite: {
    type: String,
    default: null,
    description: "Localit√©",
  },
  email_decisionnaire: {
    type: String,
    default: null,
    description: "Email du decisionnaire de l'√©tablissement",
  },
  etablissement_formateur_courriel: {
    type: String,
    default: null,
    description: "Email du formateur",
  },
  premium_invited_at: {
    type: Date,
    default: null,
    description: "Date d'invitation au Premium (Publication sur Parcoursup)",
  },
  premium_activated_at: {
    type: Date,
    default: null,
    description: "Date d'acceptation de l'offre Premium",
  },
  premium_refused_at: {
    type: Date,
    default: null,
    description: "Date de refus de l'offre Premium",
  },
  opt_mode: {
    type: String,
    enum: Object.values(optMode),
    default: null,
    description: "OPT mode used",
  },
  opt_in_activated_at: {
    type: Date,
    default: null,
    description: "Date d'activation de l'opt-int",
  },
  opt_out_invited_at: {
    type: Date,
    default: null,
    description: "Date d'invitation de l'opt-out",
  },
  opt_out_will_be_activated_at: {
    type: Date,
    default: null,
    description: "Date √† laquelle l'activation sera effective",
  },
  opt_out_activated_at: {
    type: Date,
    default: null,
    description: "Date d'activation de l'opt-out",
  },
  opt_out_refused_at: {
    type: Date,
    default: null,
    description: "Date de refus de l'opt-out",
  },
  opt_out_question: {
    type: String,
    default: null,
    description: "Question du d√©cisionnaire quand il se rends sur le formulaire de d√©sinscript √† l'opt-out",
  },
  mailing: {
    type: "array",
    description: "Liste des √©v√®nements MAIL r√©cup√©r√© par le serveur",
    required: false,
    items: {
      type: "object",
      required: false,
      properties: {
        campaign: {
          type: "string",
          default: null,
          description: "Identifiant de campagne",
        },
        message_id: {
          type: "string",
          default: null,
          description: "Identifiant Sendinblue",
        },
        status: {
          type: "string",
          default: null,
          description: "Code erreur Sendinblue",
        },
        webhook_status_at: {
          type: Date,
          default: null,
          description: "Date fournie par les webhooks Sendinblue lors de la r√©ception d'un event",
        },
        email_sent_at: {
          type: Date,
          default: null,
          description: "Date de cr√©ation de la collection",
        },
      },
    },
  },
  last_catalogue_sync: {
    type: Date,
    default: null,
    description: "Date de la derni√®re synchronisation avec le Catalogue",
  },
  created_at: {
    type: Date,
    default: Date.now,
    description: "Date de cr√©ation de la collection",
  },
}
