"use strict";window.initPrdvWidget=function(){var promises=Object.values(document.getElementsByClassName("widget-prdv")).map(createWidgetPRDV);return Promise.all(promises)};function createWidgetPRDV(element){var baseUrl="https://rdv-cfa.apprentissage.beta.gouv.fr";var siret=element.dataset.siret;var cfd=element.dataset.cfd;var referrer=element.dataset.referrer;var candidatFirstname=element.dataset.candidatFirstname;var candidatLastname=element.dataset.candidatLastname;var url="".concat(baseUrl,"/form?referrer=").concat(referrer,"&siret=").concat(siret,"&cfd=").concat(cfd);if(candidatFirstname){url="".concat(url,"&candidatFirstname=").concat(candidatFirstname)}if(candidatLastname){url="".concat(url,"&candidatLastname=").concat(candidatLastname)}return fetch("".concat(baseUrl,"/api/appointment-request/context/create?siret=").concat(siret,"&cfd=").concat(cfd,"&referrer=").concat(referrer)).then(function(response){return response.json()}).then(function(data){if(data&&!data.error){var a=document.createElement("a");var link=document.createTextNode("Prendre rendez-vous");a.appendChild(link);a.title="Prendre rendez-vous";a.target="_blank";a.href=url;element.appendChild(a)}return{siret:siret,cfd:cfd,referrer:referrer,data:data}})["catch"](console.error)}