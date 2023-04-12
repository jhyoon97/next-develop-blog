import axios from "axios";
import dayjs from "dayjs";

export default () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  axios.interceptors.request.use(
    (req) => {
      req.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
      req.headers["Notion-Version"] = "2022-06-28";

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
