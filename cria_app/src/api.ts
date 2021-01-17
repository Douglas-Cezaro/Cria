import axios from "axios";
import ENV from "../env";

export const api = axios.create({
  baseURL: ENV.URL_API,
});

