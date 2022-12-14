import { program as cli } from "commander"
import { createApiUser } from "./jobs/lba_recruteur/api/createApiUser.js"
import { disableApiUser } from "./jobs/lba_recruteur/api/disableApiUser.js"
import { resetApiKey } from "./jobs/lba_recruteur/api/resetApiKey.js"
import { annuleFormulaire } from "./jobs/lba_recruteur/formulaire/annuleFormulaire.js"
import { createUser } from "./jobs/lba_recruteur/formulaire/createUser.js"
import { relanceFormulaire } from "./jobs/lba_recruteur/formulaire/relanceFormulaire.js"
import { generateIndexes } from "./jobs/lba_recruteur/indexes/generateIndexes.js"
import { relanceOpco } from "./jobs/lba_recruteur/opco/relanceOpco.js"
import { createOffreCollection } from "./jobs/lba_recruteur/seed/createOffre.js"
import { activateOptOutEtablissementFormations } from "./jobs/rdv/activateOptOutEtablissementFormations.js"
import { candidatHaveYouBeenContacted } from "./jobs/rdv/candidatHaveYouBeenContacted.js"
import { inviteEtablissementToOptOut } from "./jobs/rdv/inviteEtablissementToOptOut.js"
import { inviteEtablissementToPremium } from "./jobs/rdv/inviteEtablissementToPremium.js"
import { inviteEtablissementToPremiumFollowUp } from "./jobs/rdv/inviteEtablissementToPremiumFollowUp.js"
import { parcoursupEtablissementStat } from "./jobs/rdv/parcoursupEtablissementStat.js"
import { syncEtablissementsAndFormations } from "./jobs/rdv/syncEtablissementsAndFormations.js"
import importFormations from "./jobs/formationsCatalogue/formationsCatalogue.js"
import updateSendinblueBlockedEmails from "./jobs/updateSendinblueBlockedEmails/updateSendinblueBlockedEmails.js"
import anonymizeOldApplications from "./jobs/anonymizeOldApplications/anonymizeOldApplications.js"
import { runScript } from "./jobs/scriptWrapper.js"

cli.addHelpText("after")

cli
  .command("index")
  .description("Synchronise les index des collections mongo & reconstruit l'index elasticsearch")
  .action(() => {
    runScript(() => generateIndexes())
  })

cli
  .command("create-user <prenom> <nom> <email> <scope> <raison_sociale> [siret] [telephone] [adresse]")
  .option("-admin, [isAdmin]", "utilisateur administrateur", false)
  .requiredOption("-type, <type>", "type d'utilisateur")
  .requiredOption("-email_valide, <email_valide>", "email valide", true)
  .description("Permet de cr??er un acc??s utilisateur ?? l'espace partenaire")
  .action((prenom, nom, email, scope, raison_sociale, siret, telephone, adresse, options) => {
    runScript(({ usersRecruteur }) => {
      createUser(
        usersRecruteur,
        {
          prenom,
          nom,
          siret,
          raison_sociale,
          telephone,
          adresse,
          email,
          scope,
        },
        { options }
      )
    })
  })

cli
  .command("create-api-user <nom> <prenom> <email> <organization> <scope>")
  .description("Permet de cr??er un utilisateur ayant acc??s ?? l'API")
  .action((nom, prenom, email, organization, scope) => {
    runScript(() => createApiUser(nom, prenom, email, organization, scope))
  })

cli
  .command("reset-api-user <email>")
  .description("Permet de r??initialiser la cl?? API d'un utilisateur")
  .action((email) => {
    runScript(({ usersRecruteur }) => resetApiKey(usersRecruteur, email))
  })

cli
  .command("disable-api-user <email> [state]")
  .description("Permet de d'activer/d??sactiver l'acc??s d'un utilisateur ?? l'API")
  .action((email, state) => {
    runScript(() => disableApiUser(email, state))
  })

cli
  .command("relance-formulaire <threshold>")
  .description("Envoie une relance par mail pour les offres expirant dans 7 jours")
  .action((threshold) => {
    runScript(({ mailer }) => relanceFormulaire(mailer, parseInt(threshold)))
  })

cli
  .command("annulation-formulaire")
  .description("Annule les offres pour lesquels la date d'expiration est correspondante ?? la date actuelle")
  .action(() => {
    runScript(() => annuleFormulaire())
  })

cli
  .command("creer-offre-metabase")
  .description("Permet de cr??er une collection d??di??e aux offres pour metabase")
  .action(() => {
    runScript(({ application }) => createOffreCollection(application))
  })

cli
  .command("relance-opco")
  .description("Relance les opco avec le nombre d'utilisateur en attente de validation")
  .action(() => {
    runScript(({ mailer }) => relanceOpco(mailer))
  })

cli
  .command("activate-opt-out-etablissement-formations")
  .description("Active tous les ??tablissements qui ont souscrits ?? l'opt-out.")
  .action(() => {
    runScript((components) => activateOptOutEtablissementFormations(components))
  })

cli
  .command("candidat-have-you-been-contacted")
  .description("Envoi un email au candidat afin de savoir si le CFA la contact??.")
  .action(() => {
    runScript((components) => candidatHaveYouBeenContacted(components))
  })

cli
  .command("invite-etablissement-to-opt-out")
  .description("Invite les ??tablissements (via email d??cisionnaire) ?? l'opt-out.")
  .action(() => {
    runScript((components) => inviteEtablissementToOptOut(components))
  })

cli
  .command("invite-etablissement-to-premium")
  .description("Invite les ??tablissements (via email d??cisionnaire) au premium (Parcoursup)")
  .action(() => {
    runScript((components) => inviteEtablissementToPremium(components))
  })

cli
  .command("invite-etablissement-to-premium-follow-up")
  .description("(Relance) Invite les ??tablissements (via email d??cisionnaire) au premium (Parcoursup)")
  .action(() => {
    runScript((components) => inviteEtablissementToPremiumFollowUp(components))
  })

cli
  .command("parcoursup-etablissement-stat")
  .description("Remonte des statistiques sur Parcoursup.")
  .action(() => {
    runScript((components) => parcoursupEtablissementStat(components))
  })

cli
  .command("sync-etablissements-and-formations")
  .description("R??cup??re la liste de toutes les formations du Catalogue et les enregistre.")
  .action(() => {
    runScript((components) => syncEtablissementsAndFormations(components))
  })

cli
  .command("sync-catalogue-trainings")
  .option("-only-change-master, [OnlyChangeMaster]", "n'importe pas de nouvelles formations mais proc??de ?? une permutation de l'index master", false)
  .description("Importe les formations depuis le Catalogue")
  .action((options) => {
    runScript(() => importFormations(options))
  })

cli
  .command("sync-sib-blocked")
  .option("-all-addresses, [AllAddresses]", "pour r??cup??rer toutes les adresses bloqu??es", false)
  .description("R??cup??re aupr??s de Sendinblue la liste des adresses emails bloqu??es le jour pr??c??dent (d??faut) ou toutes les adresses bloqu??es (option)")
  .action((options) => {
    runScript(() => updateSendinblueBlockedEmails(options))
  })

cli
  .command("anonymize-applications")
  .description("Anonymise toutes les candidatures de plus de an qui ne sont pas d??j?? anonymis??es")
  .action(() => {
    runScript(() => anonymizeOldApplications())
  })

cli.parse(process.argv)
