import { program as cli } from "commander";
import { runScript } from "./common/runScript.js";
import { createApiUser } from "./jobs/lba_recruteur/api/createApiUser.js";
import { disableApiUser } from "./jobs/lba_recruteur/api/disableApiUser.js";
import { resetApiKey } from "./jobs/lba_recruteur/api/resetApiKey.js";
import { annuleFormulaire } from "./jobs/lba_recruteur/formulaire/annuleFormulaire.js";
import { createUser } from "./jobs/lba_recruteur/formulaire/createUser.js";
import { relanceFormulaire } from "./jobs/lba_recruteur/formulaire/relanceFormulaire.js";
import { generateIndexes } from "./jobs/lba_recruteur/indexes/generateIndexes.js";
import { relanceOpco } from "./jobs/lba_recruteur/opco/relanceOpco.js";
import { createOffreCollection } from "./jobs/lba_recruteur/seed/createOffre.js";
import { activateOptOutEtablissementFormations } from "./jobs/rdv/activateOptOutEtablissementFormations.js";
import { candidatHaveYouBeenContacted } from "./jobs/rdv/candidatHaveYouBeenContacted.js";
import { inviteEtablissementToOptOut } from "./jobs/rdv/inviteEtablissementToOptOut.js";
import { inviteEtablissementToPremium } from "./jobs/rdv/inviteEtablissementToPremium.js";
import { inviteEtablissementToPremiumFollowUp } from "./jobs/rdv/inviteEtablissementToPremiumFollowUp.js";
import { parcoursupEtablissementStat } from "./jobs/rdv/parcoursupEtablissementStat.js";
import { syncEtablissementsAndFormations } from "./jobs/rdv/syncEtablissementsAndFormations.js";

cli.addHelpText("after");

cli
  .command("index")
  .description("Synchronise les index des collections mongo & reconstruit l'index elasticsearch")
  .action(() => {
    runScript(() => generateIndexes());
  });

cli
  .command("create-user <prenom> <nom> <email> <scope> <raison_sociale> [siret] [telephone] [adresse]")
  .option("-admin, [isAdmin]", "utilisateur administrateur", false)
  .requiredOption("-type, <type>", "type d'utilisateur")
  .requiredOption("-email_valide, <email_valide>", "email valide", true)
  .description("Permet de créer un accès utilisateur à l'espace partenaire")
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
      );
    });
  });

cli
  .command("create-api-user <nom> <prenom> <email> <organization> <scope>")
  .description("Permet de créer un utilisateur ayant accès à l'API")
  .action((nom, prenom, email, organization, scope) => {
    runScript(() => createApiUser(nom, prenom, email, organization, scope));
  });

cli
  .command("reset-api-user <email>")
  .description("Permet de réinitialiser la clé API d'un utilisateur")
  .action((email) => {
    runScript(({ usersRecruteur }) => resetApiKey(users, email));
  });

cli
  .command("disable-api-user <email> [state]")
  .description("Permet de d'activer/désactiver l'accès d'un utilisateur à l'API")
  .action((email, state) => {
    runScript(() => disableApiUser(email, state));
  });

cli
  .command("relance-formulaire <threshold>")
  .description("Envoie une relance par mail pour les offres expirant dans 7 jours")
  .action((threshold) => {
    runScript(({ mailer }) => relanceFormulaire(mailer, parseInt(threshold)));
  });

cli
  .command("annulation-formulaire")
  .description("Annule les offres pour lesquels la date d'expiration est correspondante à la date actuelle")
  .action(() => {
    runScript(() => annuleFormulaire());
  });

cli
  .command("creer-offre-metabase")
  .description("Permet de créer une collection dédiée aux offres pour metabase")
  .action(() => {
    runScript(({ application }) => createOffreCollection(application));
  });

cli
  .command("relance-opco")
  .description("Relance les opco avec le nombre d'utilisateur en attente de validation")
  .action(() => {
    runScript(({ mailer }) => relanceOpco(mailer));
  });

cli
  .command("activate-opt-out-etablissement-formations")
  .description("Active tous les établissements qui ont souscrits à l'opt-out.")
  .action(() => {
    runScript((components) => activateOptOutEtablissementFormations(components));
  });

cli
  .command("candidat-have-you-been-contacted")
  .description("Envoi un email au candidat afin de savoir si le CFA la contacté.")
  .action(() => {
    runScript((components) => candidatHaveYouBeenContacted(components));
  });

cli
  .command("invite-etablissement-to-opt-out")
  .description("Invite les établissements (via email décisionnaire) à l'opt-out.")
  .action(() => {
    runScript((components) => inviteEtablissementToOptOut(components));
  });

cli
  .command("invite-etablissement-to-premium")
  .description("Invite les établissements (via email décisionnaire) au premium (Parcoursup)")
  .action(() => {
    runScript((components) => inviteEtablissementToPremium(components));
  });

cli
  .command("invite-etablissement-to-premium-followUp")
  .description("(Relance) Invite les établissements (via email décisionnaire) au premium (Parcoursup)")
  .action(() => {
    runScript((components) => inviteEtablissementToPremiumFollowUp(components));
  });

cli
  .command("parcoursup-etablissement-stat")
  .description("Remonte des statistiques sur Parcoursup.")
  .action(() => {
    runScript((components) => parcoursupEtablissementStat(components));
  });

cli
  .command("sync-etablissements-and-formations")
  .description("Récupère la liste de toutes les formations du Catalogue et les enregistre.")
  .action(() => {
    runScript((components) => syncEtablissementsAndFormations(components));
  });

cli.parse(process.argv);
