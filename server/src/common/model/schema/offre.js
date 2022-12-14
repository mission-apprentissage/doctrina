import { mongooseInstance } from "../../mongodb.js"

export const offreSchema = mongooseInstance.Schema({
  libelle: { type: String, default: null, description: "Libellé du métier concerné" },
  rome_appellation_label: { type: String, default: null, description: "Libellé de l'appelation ROME" },
  niveau: {
    type: String,
    default: null,
    description: "Niveau de formation requis",
  },
  date_debut_apprentissage: {
    type: Date,
    default: null,
    description: "Date de début de l'alternance",
  },
  description: {
    type: String,
    description: "Description de l'offre d'alternance",
  },
  romes: {
    type: [String],
    default: [],
    description: "Liste des romes liés au métier",
  },
  rome_detail: {
    type: Object,
    description: "Détail du code ROME selon la nomenclature Pole emploi",
  },
  date_creation: {
    type: Date,
    default: null,
    description: "Date de creation de l'offre",
  },
  date_expiration: {
    type: Date,
    default: null,
    description: "Date d'expiration de l'offre",
  },
  date_mise_a_jour: {
    type: Date,
    default: Date.now,
    description: "Date de dernière mise à jour de l'offre",
  },
  date_derniere_prolongation: {
    type: Date,
    description: "Date de dernière prolongation de l'offre",
  },
  nombre_prolongation: {
    type: Number,
    default: 0,
    description: "Nombre de fois où l'offre a été prolongée",
  },
  relance_mail_sent: {
    type: Boolean,
    default: false,
    description: "Statut de l'envoi du mail de relance avant expiration",
  },
  statut: {
    type: String,
    default: "Active",
    enum: ["Active", "Annulée", "Pourvue"],
    description: "Statut de l'offre",
  },
  raison_statut: {
    type: String,
    description: "Raison de la suppression de l'offre",
  },
  type: {
    type: [String],
    default: "Apprentissage",
    enum: ["Apprentissage", "Professionnalisation"],
    description: "Type de contrat",
  },
  multi_diffuser: {
    type: Boolean,
    default: null,
    description: "Definit si l'offre est diffusée sur d'autres jobboard que La bonne alternance",
  },
  delegate: {
    type: Boolean,
    description: "Definit si l'entreprise souhaite déléguer l'offre à un CFA",
  },
  elligible_handicap: {
    type: Boolean,
    description: "Poste ouvert aux personnes en situation de handicap",
  },
  quantite: {
    type: Number,
    description: "Nombre de poste(s) ouvert(s) pour cette offre",
  },
  duree_contrat: {
    type: Number,
    description: "Durée du contrat en année",
  },
  rythme_alternance: {
    type: String,
    description: "Répartition de la présence de l'alternant en formation/entreprise",
  },
  custom_adress: {
    type: String,
    default: null,
    description: "Adresse personnalisée de l'entreprise",
  },
  custom_gps_coordinates: {
    type: String,
    default: null,
    description: "Latitude/Longitude de l'adresse personnalisée de l'entreprise",
  },
})
