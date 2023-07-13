import axios from "axios";

// config
import config from "config";

export const notionAxios = axios.create({
  baseURL: "https://api.notion.com/v1",
  headers: {
    Authorization: `Bearer ${config.notion.apiKey}`,
    "Notion-Version": "2022-06-28",
  },
});

export default () => {
  axios.defaults.baseURL = config.apiHost;

  axios.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );
};
