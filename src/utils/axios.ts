import axios from "axios";

export const notionAxios = axios.create({
  baseURL: "https://api.notion.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    "Notion-Version": "2022-06-28",
  },
});

export default () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

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
