import config from "../../config.js";
import axios from "axios";

const notifyToSlack = async (message) => {
  await axios.post(config.jobSlackWebhook, {
    text: `[LBA - ${config.env.toUpperCase()}] ${message}`,
  });
};

export { notifyToSlack };
