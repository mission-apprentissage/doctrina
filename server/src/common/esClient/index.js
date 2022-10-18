import { Client } from "@elastic/elasticsearch";
import ElasticsearchScrollStream from "elasticsearch-scroll-stream";
import { transformObject, mergeStreams } from "../utils/streamUtils.js";
import mongoosastic from "./mongoosastic.js";
import config from "../../config.js";

const getClientOptions = (envName) => {
  let node = { node: envName === "local" ? "http://127.0.0.1:9200" : "http://elasticsearch:9200" };

  return node;
};

const createEsInstance = () => {
  const options = getClientOptions(config.env);

  const client = new Client({
    ...options,
    maxRetries: 5,
    requestTimeout: 60000,
  });

  client.extend("searchDocumentsAsStream", () => {
    return (options) => {
      return mergeStreams(
        new ElasticsearchScrollStream(
          client,
          {
            scroll: "1m",
            size: "50",
            ...options,
          },
          ["_id"]
        ),
        transformObject((data) => {
          return JSON.parse(Buffer.from(data).toString());
        })
      );
    };
  });
  return client;
};
const clientDefault = createEsInstance();
const getElasticInstance = () => clientDefault;

let clientDomainesMetiers = createEsInstance("domainesmetiers");
let clientDiplomesMetiers = createEsInstance("diplomesmetiers");
let clientCatalogueFormations = createEsInstance("convertedformations");
let clientBonnesBoites = createEsInstance("bonnesboites");

const getDomainesMetiersES = () => {
  return clientDomainesMetiers;
};

const getDiplomesMetiersES = () => {
  return clientDiplomesMetiers;
};

const getFormationsES = () => {
  return clientCatalogueFormations;
};

const getBonnesBoitesES = () => {
  return clientBonnesBoites;
};

export {
  getDomainesMetiersES,
  getDiplomesMetiersES,
  getElasticInstance,
  getFormationsES,
  getBonnesBoitesES,
  mongoosastic,
};
